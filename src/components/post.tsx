import Link from 'next/link';
import { GetServerSideProps } from 'next';

import { getPostsData } from '../lib/api';

import { dellPost } from '../lib/api';
import styled from 'styled-components';

const Posts = ({ allPostsData }) => {
    return (
        <div>
            <Grid>
                {allPostsData.map(({ id, body, title, comments }) =>
                    id && id !== ' ' && body && body !== ' ' && title && title !== ' ' ? (
                        <Post key={id}>
                            <PostContent>
                                <Title>
                                    <div>{title}</div>
                                </Title>

                                <BodyPost>{body}</BodyPost>

                                <Comment>
                                    {comments && comments.body !== ' ' && comments.body !== ''
                                        ? comments.body
                                        : 'no comment'}
                                </Comment>
                            </PostContent>
                            <div>
                                <BtnDel onClick={dellPost.bind(this, id)}>DELETE</BtnDel>
                            </div>
                        </Post>
                    ) : null,
                )}
            </Grid>
        </div>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 31% 31% 31%;
    grid-gap: 2vw;
`;

const Post = styled.div`
    background: #ddd;
    border-radius: 3px;
    padding: 15px;
    cursor: pointer;
    transition: box-shadow 0.1s;
    overflow: hidden;
    position: relative;

    :hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
`;

const PostContent = styled.div`
    padding-bottom: 120px;
`;

const Comment = styled.div`
    margin-top: 50px;
    border-radius: 3px;
    padding: 5px 10px;
    background: #cacaca;

    position: absolute;
    bottom: 70px;
    left: 10%;
    right: 10%;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const BtnDel = styled.div`
    color: #fff;
    background-color: rgb(220, 0, 78);
    margin: 8px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 10px;
    text-align: center;
    position: absolute;
    bottom: 10px;
    left: 8%;

    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    width: 80%;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
        background-color: rgb(154, 0, 54);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
`;

const BodyPost = styled.div``;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const allPostsData = await getPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

export default Posts;
