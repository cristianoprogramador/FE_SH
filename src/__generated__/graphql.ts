/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type EditUserData = {
  birthDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  salary?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject?: Maybe<Project>;
  createUser?: Maybe<User>;
  editUser?: Maybe<User>;
  statusChangeUser?: Maybe<User>;
};


export type MutationCreateProjectArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  birthDate: Scalars['String']['input'];
  email: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position: Scalars['String']['input'];
  salary: Scalars['Float']['input'];
};


export type MutationEditUserArgs = {
  input?: InputMaybe<EditUserData>;
};


export type MutationStatusChangeUserArgs = {
  input?: InputMaybe<StatusChangeUserData>;
};

export type Project = {
  __typename?: 'Project';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Query = {
  __typename?: 'Query';
  projects?: Maybe<Array<Maybe<Project>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  birthDate?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<Project>>>;
  salary?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type StatusChangeUserData = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};
