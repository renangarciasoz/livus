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
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  currentPage: number;
};

export const SubscribersComponent = ({
  subscribers,
  handleChange,
  currentPage,
}: Props) => {
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
                          {subscriber.subscription_date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" style={{ fontWeight: 400 }}>
                          {subscriber.tier.name}
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
              count={2}
              variant="outlined"
              className={classes.pagination}
              onChange={handleChange}
              page={currentPage}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
