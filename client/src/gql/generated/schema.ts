import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createWilder: Wilder;
  deleteWilder: Scalars['Boolean'];
};


export type MutationCreateWilderArgs = {
  data: WilderInput;
};


export type MutationDeleteWilderArgs = {
  id: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  wilder: Wilder;
  wilders: Array<Wilder>;
};


export type QueryWilderArgs = {
  id: Scalars['Float'];
};

export type SkillOfWilder = {
  __typename?: 'SkillOfWilder';
  id: Scalars['Float'];
  name: Scalars['String'];
  votes: Scalars['Float'];
};

export type Wilder = {
  __typename?: 'Wilder';
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  skills: Array<SkillOfWilder>;
};

export type WilderInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateWilderMutationVariables = Exact<{
  data: WilderInput;
}>;


export type CreateWilderMutation = { __typename?: 'Mutation', createWilder: { __typename?: 'Wilder', id: number } };

export type DeleteWilderMutationVariables = Exact<{
  deleteWilderId: Scalars['Float'];
}>;


export type DeleteWilderMutation = { __typename?: 'Mutation', deleteWilder: boolean };

export type WildersQueryVariables = Exact<{ [key: string]: never; }>;


export type WildersQuery = { __typename?: 'Query', wilders: Array<{ __typename?: 'Wilder', id: number, name: string, bio?: string | null, city?: string | null, avatarUrl?: string | null, skills: Array<{ __typename?: 'SkillOfWilder', id: number, name: string, votes: number }> }> };


export const CreateWilderDocument = gql`
    mutation CreateWilder($data: WilderInput!) {
  createWilder(data: $data) {
    id
  }
}
    `;
export type CreateWilderMutationFn = Apollo.MutationFunction<CreateWilderMutation, CreateWilderMutationVariables>;

/**
 * __useCreateWilderMutation__
 *
 * To run a mutation, you first call `useCreateWilderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWilderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWilderMutation, { data, loading, error }] = useCreateWilderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateWilderMutation(baseOptions?: Apollo.MutationHookOptions<CreateWilderMutation, CreateWilderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWilderMutation, CreateWilderMutationVariables>(CreateWilderDocument, options);
      }
export type CreateWilderMutationHookResult = ReturnType<typeof useCreateWilderMutation>;
export type CreateWilderMutationResult = Apollo.MutationResult<CreateWilderMutation>;
export type CreateWilderMutationOptions = Apollo.BaseMutationOptions<CreateWilderMutation, CreateWilderMutationVariables>;
export const DeleteWilderDocument = gql`
    mutation DeleteWilder($deleteWilderId: Float!) {
  deleteWilder(id: $deleteWilderId)
}
    `;
export type DeleteWilderMutationFn = Apollo.MutationFunction<DeleteWilderMutation, DeleteWilderMutationVariables>;

/**
 * __useDeleteWilderMutation__
 *
 * To run a mutation, you first call `useDeleteWilderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWilderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWilderMutation, { data, loading, error }] = useDeleteWilderMutation({
 *   variables: {
 *      deleteWilderId: // value for 'deleteWilderId'
 *   },
 * });
 */
export function useDeleteWilderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWilderMutation, DeleteWilderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWilderMutation, DeleteWilderMutationVariables>(DeleteWilderDocument, options);
      }
export type DeleteWilderMutationHookResult = ReturnType<typeof useDeleteWilderMutation>;
export type DeleteWilderMutationResult = Apollo.MutationResult<DeleteWilderMutation>;
export type DeleteWilderMutationOptions = Apollo.BaseMutationOptions<DeleteWilderMutation, DeleteWilderMutationVariables>;
export const WildersDocument = gql`
    query Wilders {
  wilders {
    id
    name
    bio
    city
    avatarUrl
    skills {
      id
      name
      votes
    }
  }
}
    `;

/**
 * __useWildersQuery__
 *
 * To run a query within a React component, call `useWildersQuery` and pass it any options that fit your needs.
 * When your component renders, `useWildersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWildersQuery({
 *   variables: {
 *   },
 * });
 */
export function useWildersQuery(baseOptions?: Apollo.QueryHookOptions<WildersQuery, WildersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WildersQuery, WildersQueryVariables>(WildersDocument, options);
      }
export function useWildersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WildersQuery, WildersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WildersQuery, WildersQueryVariables>(WildersDocument, options);
        }
export type WildersQueryHookResult = ReturnType<typeof useWildersQuery>;
export type WildersLazyQueryHookResult = ReturnType<typeof useWildersLazyQuery>;
export type WildersQueryResult = Apollo.QueryResult<WildersQuery, WildersQueryVariables>;