import {
  Typography,
  Grid,
  Container,
  Link,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { CreatorPageLayout } from 'layouts';
import React from 'react';

const rows = [
  {
    name: 'Rodrigo Pereira',
    data: '13/04/2021',
    plan: 'Plano 1',
  },
  {
    name: 'Rodrigo Pereira',
    data: '13/04/2021',
    plan: 'Plano 1',
  },
  {
    name: 'Rodrigo Pereira',
    data: '13/04/2021',
    plan: 'Plano 1',
  },
];

export default function CreatorPage(): React.ReactElement {
  return (
    <CreatorPageLayout title="Livus" description="Livus">
      <>
        <div
          style={{
            display: 'flex',
            height: '397px',
            alignItems: 'flex-end',
            background:
              'url(https://i.redd.it/5ig2a804on731.png) center center no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Container>
            <Grid container alignItems="flex-end">
              <Grid item xs={2}>
                <img
                  src="https://i.pinimg.com/originals/8a/c6/a6/8ac6a6937ad46de77db14bb0a8f1b81b.jpg"
                  width={170}
                  height={170}
                  style={{ marginBottom: '-16px', objectFit: 'cover' }}
                  alt="user"
                />
              </Grid>
              <Grid item container xs={6}>
                <Grid item xs={12}>
                  <Typography color="secondary" variant="h2">
                    <strong>Creator Name</strong>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="secondary" variant="subtitle1">
                    Creator description biography
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <div
            style={{
              paddingTop: '34px',
              paddingBottom: '34px',
              borderBottom: '1px solid black',
            }}
          >
            <Container>
              <Grid container>
                <Grid item xs={2}>
                  <Typography variant="h5">
                    <Link href="!#">Assinantes</Link>
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="h5">
                    <Link href="!#">Cursos</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Container>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  justify="center"
                  style={{ padding: '32px 0' }}
                >
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
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell>
                              <Typography
                                variant="h6"
                                style={{ fontWeight: 400 }}
                              >
                                {row.name}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="h6"
                                style={{ fontWeight: 400 }}
                              >
                                {row.data}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="h6"
                                style={{ fontWeight: 400 }}
                              >
                                {row.plan}
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
                    style={{
                      padding: '24px 0',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </>
    </CreatorPageLayout>
  );
}
