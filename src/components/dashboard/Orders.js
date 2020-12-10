import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import Axios from "axios";
import { fetchData } from "../../redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    setIsFetching(true);
  }, []);
  let data = useSelector((state) => state.data);

  const classes = useStyles();
  if (isFetching) {
    return (
      <React.Fragment>
        <Title>Users</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ? data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.userId}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.completed}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Title>Users</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>loading...</TableCell>
              <TableCell>loading...</TableCell>
              <TableCell>loading...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}
