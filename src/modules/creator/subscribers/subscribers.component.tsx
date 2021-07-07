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
  Box,
} from '@material-ui/core';
import { Pagination, Skeleton } from '@material-ui/lab';
import { useStyles } from './subscribers.styles';
import { Subscriber } from '@types';
import { format } from 'date-fns';

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

  const getDateFormatted = (date: string) => {
    const verifyDate = Date.parse(date);
    return !isNaN(verifyDate)
      ? format(new Date(date), 'dd/MM/yyyy')
      : 'Data Inválida';
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {subscribers.length ? (
              <>
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
                          <TableCell
                            align="left"
                            className={classes.tableNameCell}
                          >
                            <Typography
                              variant="h6"
                              style={{ fontWeight: 400 }}
                            >
                              {subscriber.name}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography
                              variant="h6"
                              style={{ fontWeight: 400 }}
                            >
                              {getDateFormatted(subscriber.subscription_date)}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography
                              variant="h6"
                              style={{ fontWeight: 400 }}
                            >
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
              </>
            ) : (
              <Box display="flex" flexDirection="column" alignItems="center">
                <Skeleton width="100%" height={300} />
                <Skeleton width={100} height={80} />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
