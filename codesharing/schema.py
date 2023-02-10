import graphene

from graphql_auth.schema import MeQuery, UserQuery
from graphql_auth import mutations

from project.schema import ProjectMutation

class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()

class Query(MeQuery, UserQuery, graphene.ObjectType):
    pass

class Mutation(AuthMutation, ProjectMutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)