import Layout from '../../components/layout';

import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';

import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { addPost } from '../../lib/api';

interface MyFormValues {
    title: string;
    body: string;
}

export const CreatePost: React.FC<{}> = () => {
    const initialValues: MyFormValues = { title: '', body: '' };
    return (
        <Layout home={false}>
            <h1>Create new post</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    addPost(values);
                }}
                render={({ isSubmitting }) => (
                    <Form>
                        <MyStyledForm>
                            <Subtitle>Enter your post title</Subtitle>
                            <Field wrap="off" name="title" as={MyStyledTitle} className="form-input" />
                            <Subtitle>Enter post text</Subtitle>
                            <Field wrap="off" name="body" as={MyStyledBody} className="form-input" />
                            <BtnForm>
                                <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                                    Create
                                </Button>
                            </BtnForm>
                        </MyStyledForm>
                    </Form>
                )}
            />
        </Layout>
    );
};

const MyStyledInput = styled.input`
    padding: 0.5em;
    border: 1px solid #ccc;
    overflow: auto;
    outline: none;
    -moz-appearance: none;
    resize: none;
    height: 50px;
    font-size: 1.1rem;
    margin-bottom: 30px;
`;

const MyStyledTextarea = styled.input`
    padding: 0.5em;
    border: 1px solid #ccc;
    overflow: auto;
    outline: none;
    -moz-appearance: none;
    resize: none;
    height: 150px;
    font-size: 1.1rem;
    margin-bottom: 30px;
`;

const Subtitle = styled.span`
    tab-size: 1.2rem;
`;

const MyStyledForm = styled.div`
    display: flex;
    flex-direction: column;
`;

const BtnForm = styled.div`
    margin-top: 10px;
`;

const MyStyledTitle = MyStyledInput.withComponent('input');

const MyStyledBody = MyStyledTextarea.withComponent('textarea');

export default CreatePost;
