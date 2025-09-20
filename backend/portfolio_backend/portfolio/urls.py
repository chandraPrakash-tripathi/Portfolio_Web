from django.urls import path
from .views import ProjectListView, SkillListView

urlpatterns = [
    path('projects/', ProjectListView.as_view(), name='projects'),
    path('skills/', SkillListView.as_view(), name='skills'),
]