import { CardUser } from "@/components/CardUser";
import { useListUsers, usePostsUser, useSingleUser } from "@/hooks";
import { GridWrapperStyle } from "@/styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { HomeWrapperStyled } from "./styled-components/HomeWrapper";
import ErrorIcon from "@mui/icons-material/Error";
import { AnimatedDiv, BodyPosts } from "@/components";
import SideBar from "@/components/SideBar/SideBar";
import { CloseDivStyled } from "./styled-components/CloseDiv";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Home = () => {
  const [idUserSelected, setIdUserSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { data, isError, isFetching, isLoading, refetch } = useListUsers();
  const {
    data: dataUser,
    refetch: refetchDataUser,
    remove,
  } = useSingleUser(idUserSelected);
  const {
    data: dataUserPosts,
    refetch: refetchDataUserPosts,
    remove: removePosts,
  } = usePostsUser(idUserSelected);
  const handleDrawer = (id: number) => {
    setIdUserSelected(id);
    setIsOpen(true);
  };
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (idUserSelected > 0) {
      refetchDataUser();
      refetchDataUserPosts();
    }
  }, [idUserSelected]);
  useEffect(() => {
    if (!isOpen) {
      remove();
      removePosts();
      setIdUserSelected(0);
    }
  }, [isOpen]);
  if (isLoading || isFetching) {
    return (
      <HomeWrapperStyled>
        <CircularProgress />
      </HomeWrapperStyled>
    );
  }
  if (isError) {
    return (
      <HomeWrapperStyled>
        <ErrorIcon></ErrorIcon>
      </HomeWrapperStyled>
    );
  }

  return (
    <HomeWrapperStyled>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen}>
        {dataUser && dataUserPosts ? (
          <AnimatedDiv drag={false}>
            <CardUser noStyle>
              <CloseDivStyled>
                <IconButton onClick={() => setIsOpen(false)}>
                  <CloseIcon htmlColor="red" />
                </IconButton>
              </CloseDivStyled>
              <CardUser.CardAvatar
                url={dataUser.data.avatar}
              ></CardUser.CardAvatar>
              <CardUser.CardTitle
                title={dataUser.data.last_name}
              ></CardUser.CardTitle>
              <CardUser.CardDescription
                description={dataUser.data.email}
              ></CardUser.CardDescription>
            </CardUser>
            <BodyPosts data={dataUserPosts} />
          </AnimatedDiv>
        ) : (
          <></>
        )}
      </SideBar>
      <GridWrapperStyle>
        {data
          ? data.data.map((user: any) => (
              <AnimatedDiv key={user.id}>
                <CardUser>
                  <div
                    onClick={() => {
                      handleDrawer(user.id);
                    }}
                  >
                    <CardUser.CardAvatar
                      url={user.avatar}
                    ></CardUser.CardAvatar>
                  </div>
                  <CardUser.CardTitle
                    title={`${user.first_name} ${user.last_name}`}
                  ></CardUser.CardTitle>
                  <CardUser.CardDescription
                    description={user.email}
                  ></CardUser.CardDescription>
                </CardUser>
              </AnimatedDiv>
            ))
          : null}
      </GridWrapperStyle>
    </HomeWrapperStyled>
  );
};

export default Home;
