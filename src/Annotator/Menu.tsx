import React from 'react'
import { Paper, MenuList, MenuItem, TextField, RootRef } from '@material-ui/core';

interface MenuProps {
  left: number;
  top: number;
  tags: string[];
  handleMenuItemClick: (tag: string, index: number) => void;
  close: () => void;
  updateTags: (tags: string[]) => void;
}

interface MenuStates {
  inputText: any
  adding: boolean;
}

export class Menu extends React.Component<MenuProps, MenuStates> {
  rootRef: any;
  constructor(props: MenuProps) {
    super(props)

    this.rootRef = (React as any).createRef();
  }
  public state: MenuStates = {
    inputText: '',
    adding: false,
  }
  public componentDidMount() {
    setTimeout(() => {
      document.addEventListener('click', this.handleClick);
    }, 500)
  }
  public componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }
  public render() {
    const {handleMenuItemClick, left, top, tags} = this.props
    return (
      <RootRef rootRef={this.rootRef} >
        <Paper
          style={{
            left: `${left}px`, 
            top: `${top + 10}px`,
            display: 'inline-block',
            position:'absolute',
            zIndex: 10
          }}
        >
          <MenuList>
            {tags.map((tag, index) => <MenuItem key={index} onClick={event => handleMenuItemClick(tag, index)}>{tag}</MenuItem>)}
            {
              this.state.adding ?
              <MenuItem>
                <TextField
                  style={{width: '100px'}}
                  defaultValue=""
                  margin="normal"
                  value={this.state.inputText}
                  onChange={this.handleChange}
                  onKeyPress={this.handleSubmit}
                />
              </MenuItem> : 
              <MenuItem onClick={this.handleAddTag}>add</MenuItem>
            }
          </MenuList>
        </Paper>
      </RootRef>
    )
  }
  private handleClick = (e: any) => {
    if (!this.rootRef.current.contains(e.target)) {
      console.log('close')
      this.props.close();
    }
  }
  private handleSubmit = (e: any) => {
    if (e.key.toLowerCase() === "enter") {
      this.props.updateTags([
        ...this.props.tags,
        this.state.inputText
      ])
      this.setState({
        adding: false,
        inputText:''
      })
    }
  }

  private handleChange = (e: any) => {
    this.setState({
      inputText: e.target.value
    })
  }

  private handleAddTag = () => {
    this.setState({adding: true})
  }
}
