import gql from 'graphql-tag';

export default gql`
query LoginQuery($email:String!,$password:String!){
  SignIn(signInWith:{email:$email,password:$password}) {
    authToken
  }
}
`;
