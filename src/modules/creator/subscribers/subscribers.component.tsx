import React from 'react';
import {
  Container,
  Grid,
  Typography,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useStyles } from './subscribers.styles';
import { Subscriber } from '@types';

type Props = {
  subscribers: Subscriber[];
};

export const SubscribersComponent = ({ subscribers }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} style={{ padding: '32px 0' }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subscribers.map((subscriber) => (
                    <TableRow key={subscriber.name}>
                      <TableCell>
                        <Typography variant="h6" style={{ fontWeight: 400 }}>
                          {subscriber.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" style={{ fontWeight: 400 }}>
                          {subscriber.data}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" style={{ fontWeight: 400 }}>
                          {subscriber.plan}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination
              size="large"
              hidePrevButton
              hideNextButton
              count={3}
              variant="outlined"
              className={classes.pagination}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
