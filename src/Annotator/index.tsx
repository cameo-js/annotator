import React, { Fragment } from 'react'
import RootRef from '@material-ui/core/RootRef';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import {selectionIsEmpty, selectionIsBackwards, splitWithOffsets} from './utils'
import { stringToRGBA, stringToHex } from './color';
import { Menu } from './Menu';
import { Pannel } from './Pannel';
import styled from 'styled-components';

const Phrase = styled.div`
  padding: 0.5rem;
  line-height: 1.7rem;
`

const styles = {
  root: {
    borderLeft: '1px solid gray',
  },
  tile: {
    overflow: 'scroll',
  },
};

const StyledGridListTile = withStyles(styles)(GridListTile);

export interface Entity {
  start: number
  end: number
  text: string
  tag: string
}

export interface AnnotatorProps {
  phrase: string;
  tags: string[];
  updateTags: (tags: string[]) => void;
  entities: Entity[];
  updateEntities: (entities: Entity[]) => void;
}

export interface AnnotatorStates {
  open: boolean
  start: number
  end: number
  inputText: string
  left: number
  top: number
}

const Split = (props: any) => {
  if (props.mark) return (
    <mark
      style={{border: `3px solid ${stringToHex(props.tag)}`,backgroundColor: stringToRGBA(props.tag), padding: '0 4px'}}
      data-start={props.start}
      data-end={props.end}
      onClick={() => props.onClick ? props.onClick({start: props.start, end: props.end}) : null}
    >
      {props.text}
    </mark>
  )
  return (
    <span
      data-start={props.start}
      data-end={props.end}
      onClick={() => props.onClick ? props.onClick({start: props.start, end: props.end}) : null}
    >
      {props.content}
    </span>
  )
}

export default class Annotator extends React.Component<AnnotatorProps, AnnotatorStates> {
  rootRef: any
  menuRef: any
  constructor(props: AnnotatorProps) {
    super(props)

    this.rootRef = (React as any).createRef()
    this.menuRef = (React as any).createRef()
  }
  public state: AnnotatorStates = {
    open: false,
    start: 0,
    end: 0,
    inputText: '',
    left: 0,
    top: 0
  }
  componentDidMount() {
    this.rootRef.current.addEventListener('mouseup', this.handleMouseUp)
  }
  componentWillUnmount() {
    this.rootRef.current.removeEventListener('mouseup', this.handleMouseUp)
  }
  render() {
    const {phrase, entities, updateTags} = this.props
    const splits = splitWithOffsets(phrase, entities)
    return (
      <Fragment>
        {this.state.open && 
          <Menu 
            handleMenuItemClick={this.handleMenuItemClick} 
            close={() => this.setState({open: false})}
            left={this.state.left}
            top={this.state.top}
            tags={this.props.tags}
            updateTags={updateTags}
          />
        }
        <RootRef rootRef={this.menuRef} >
          <GridList style={{width: '100%'}} cellHeight={130} cols={3}>
            <GridListTile cols={2}>
              <Phrase ref={this.rootRef}>
                {splits.map(split => (
                  <Split key={`${split.start}-${split.end}`} {...split} />
                ))}
              </Phrase>
            </GridListTile>
            <StyledGridListTile cols={1}>
              <Pannel 
                entities={entities}
                onStyle={(tag) => ({backgroundColor: stringToRGBA(tag), border: `3px solid ${stringToHex(tag)}`})}
                onDelete={(start: number, end: number) => this.handleDelete(start, end)}
              />
            </StyledGridListTile>
          </GridList>
        </RootRef>
      </Fragment>
    )
  }
  handleDelete = (start: number, end: number) => {
    const splitIndex = this.props.entities.findIndex(s => s.start === start && s.end === end)
    if (splitIndex >= 0) {
      this.props.updateEntities([
        ...this.props.entities.slice(0, splitIndex),
        ...this.props.entities.slice(splitIndex + 1),
      ])
    }
  }
  handleMouseUp = () => {
    const selection = window.getSelection()

    if (selectionIsEmpty(selection)) {
      this.setState({open: false})
      return
    }

    let temp = this.menuRef.current;
    let offsetTop = 0;
    let offsetLeft = 0;
    while (temp.offsetParent) {
      temp = temp.offsetParent;
      offsetTop += temp.offsetTop;
      offsetLeft += temp.offsetLeft;
    }

    const left = window.getSelection().getRangeAt(0).getBoundingClientRect().left - offsetLeft;
    const top = window.getSelection().getRangeAt(0).getBoundingClientRect().top +
      window.getSelection().getRangeAt(0).getBoundingClientRect().height/2 - offsetTop;

    let start =
      parseInt((selection.anchorNode.parentElement as any).getAttribute('data-start'), 10) +
      selection.anchorOffset
    let end =
      parseInt((selection.focusNode.parentElement as any).getAttribute('data-start'), 10) +
      selection.focusOffset

    if (selectionIsBackwards(selection)) {
      ;[start, end] = [end, start]
    }

    this.setState({
      open: true,
      start,
      end,
      left,
      top
    })
  }

  handleMenuItemClick = (tag: string) => {
    const entities = this.props.entities;
    const index = entities.findIndex(a => a.start > this.state.start);
    const data = {
      start: this.state.start, 
      end: this.state.end, 
      text: this.props.phrase.slice(this.state.start, this.state.end),
      tag,
    };

    let list = [
      ...entities,
      data
    ];

    if (index >= 0) {
      list = [
        ...entities.slice(0, index),
        data,
        ...entities.slice(index, entities.length)
      ];
    }


    this.props.updateEntities(list)
    this.setState({open: false})

    window.getSelection().empty()
  }
}