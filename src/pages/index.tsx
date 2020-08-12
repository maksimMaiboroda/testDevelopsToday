import Link from 'next/link';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { getPostsData } from '../lib/api';

import utilStyles from '../styles/utils.module.scss';

import Button from '@material-ui/core/Button';

import styled from 'styled-components';
import Posts from '../components/post';
import Layout, { siteTitle } from '../components/layout';

const App = ({ allPostsData }) => {
    return (
        <Layout home>
            <section className={utilStyles.headingMd}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <CreatePost>
                    <Link href="/posts/create-post">
                        <Button variant="contained" color="primary" disableElevation>
                            Create post
                        </Button>
                    </Link>
                </CreatePost>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={utilStyles.list}>
                    <Posts allPostsData={allPostsData} />
                </ul>
            </section>
        </Layout>
    );
};

const CreatePost = styled.div`
    margin-bottom: 30px;
`;

const Title = styled.h1`
    color: #333;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const allPostsData = await getPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};
export default App;
