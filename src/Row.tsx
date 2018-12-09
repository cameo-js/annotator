import React, { SFC } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Annotator, { Entity } from './Annotator';

export interface RowProps {
  phrase: string;
  tags: string[];
  updateTags: (tags: string[]) => void;
  entities: Entity[];
  updateEntities: (entities: Entity[]) => void;
}

export const Row: SFC<RowProps> = ({phrase, tags, updateTags, entities, updateEntities}) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography>[{entities.length}] {phrase}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Annotator 
          phrase={phrase}
          tags={tags}
          updateTags={updateTags}
          entities={entities}
          updateEntities={updateEntities}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}