import React, { SFC, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import { Entity } from '.';

const Wrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface PannelProps {
  entities: Entity[];
  onStyle: (tag: string) => React.CSSProperties;
  onDelete: (start: number, end: number) => void;
}

export const Pannel: SFC<PannelProps> = ({entities, onStyle, onDelete}) => {
  return (
    <Fragment>
      {entities.map((entity, index) => {
        return (
          <Wrapper key={index}>
            <span style={onStyle(entity.tag)}>{entity.tag}</span>
            <span>{entity.text}</span>
            <IconButton style={{padding: '0px'}} aria-label="Delete" onClick={() => onDelete(entity.start, entity.end)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Wrapper>
        )
      })}
    </Fragment>
  )
}