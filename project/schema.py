import graphene

from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required

from project.models import File, Project

class FileType(DjangoObjectType):
    class Meta:
        model = File

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project

class CreateProject(graphene.Mutation):
    id = graphene.Int()
    project_name = graphene.String()
    project_owner = graphene.String()

    class Arguments:
        project_name = graphene.String()

    @classmethod
    @login_required
    def mutate(cls, root, info, project_name):
        project = Project(project_name=project_name, project_owner=info.context.user)
        project.save()

        return CreateProject(
            id=project.id,
            project_name=project.project_name,
            project_owner=project.project_owner,
        )

class CreateFile(graphene.Mutation):
    id = graphene.Int()
    file_name = graphene.String()
    file_type = graphene.String()
    belongs_to = graphene.String()

    class Arguments:
        file_name = graphene.String()
        file_type = graphene.String()
        belongs_to = graphene.Int()

    @classmethod
    @login_required
    def mutate(cls, root, info, file_name, file_type, belongs_to):
        file = File(file_name=file_name, file_type=file_type, belongs_to=Project.objects.get(pk=belongs_to))
        file.save()

        return CreateFile(
            id=file.id,
            file_name=file.file_name,
            file_type=file.file_type,
            belongs_to=file.belongs_to,
        )


class ProjectMutation(graphene.ObjectType):
    create_project = CreateProject.Field()
    create_file = CreateFile.Field()
