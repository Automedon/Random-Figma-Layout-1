import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  currentDate: Scalars['DateTime'];
  findAllUsers: Array<User>;
};


export type User = {
  __typename?: 'User';
  name: Scalars['String'];
  pathToImg: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  publisherMutation: Scalars['Boolean'];
  createUser: User;
  addFileToDB: Scalars['Boolean'];
  addProfilePicture: Scalars['Boolean'];
};


export type MutationPublisherMutationArgs = {
  message?: Maybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
};


export type MutationAddFileToDbArgs = {
  picture: Scalars['Upload'];
};


export type MutationAddProfilePictureArgs = {
  picture: Scalars['Upload'];
};


export type Subscription = {
  __typename?: 'Subscription';
  normalSubscription: Notification;
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
};

export type AddFileMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type AddFileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addFileToDB'>
);

export type UploadFileMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type UploadFileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addProfilePicture'>
);


export const AddFileDocument = gql`
    mutation AddFile($picture: Upload!) {
  addFileToDB(picture: $picture)
}
    `;
export type AddFileMutationFn = Apollo.MutationFunction<AddFileMutation, AddFileMutationVariables>;

/**
 * __useAddFileMutation__
 *
 * To run a mutation, you first call `useAddFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFileMutation, { data, loading, error }] = useAddFileMutation({
 *   variables: {
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useAddFileMutation(baseOptions?: Apollo.MutationHookOptions<AddFileMutation, AddFileMutationVariables>) {
        return Apollo.useMutation<AddFileMutation, AddFileMutationVariables>(AddFileDocument, baseOptions);
      }
export type AddFileMutationHookResult = ReturnType<typeof useAddFileMutation>;
export type AddFileMutationResult = Apollo.MutationResult<AddFileMutation>;
export type AddFileMutationOptions = Apollo.BaseMutationOptions<AddFileMutation, AddFileMutationVariables>;
export const UploadFileDocument = gql`
    mutation UploadFile($picture: Upload!) {
  addProfilePicture(picture: $picture)
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, baseOptions);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;