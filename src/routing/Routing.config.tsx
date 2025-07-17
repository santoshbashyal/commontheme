import { createBrowserRouter, RouterProvider } from "react-router";
import { HomeLayoutPage } from "../components/layout/HomeLayoutPage";
import HomePage from "../pages/home/home-page";
// import PostListPage from "../pages/posts/post-list/post-list";
import { ROUTES } from "../common/routes";
import AddPost from "../pages/post/post-add/add-post";
import { CategoryListPage } from "../pages/category/category-list/categry-list";
import { CategoryAddPage } from "../pages/category/add-category/CategoryAddPage";
import { UsersAddPage } from "../pages/users/add-new/UsersAddPage";
import { PagesAdd } from "../pages/pages-/add-pages/PagesAdd";
// import { PagesList } from "../pages/pages-/list-pages/pages-list";
import PostListPage from "../pages/post/post-list/PostListPage";
import UserListPage from "../pages/users/list-users/users-list";
import PageListPage from "../pages/pages-/list-pages/pages-list";
import RolesListPage from "../pages/roles/roles-list/roles-list";
import SubscribersListPage from "../pages/subscribers/subscriber-list";
import MembersListPage from "../pages/members/list-members/members-list";
import Settings from "../pages/settings/Settings";
import MembersAddPage from "../pages/members/add-new/MemberAddPage";
import { RolesAddPage } from "../pages/roles/add-roles/RolesAddPage";
// import { UserListPage } from "../pages/users/list-users/users-list";

const router = createBrowserRouter([
  {
    element: <HomeLayoutPage />,
    children: [
      {
        path: ROUTES.dashboard,
        element: <HomePage />,
      },
      {
        path: ROUTES.post.list,
        element: <PostListPage />,
      },
      {
        path: ROUTES.post.add,
        element: <AddPost />,
      },
      {
        path: ROUTES.category.list,
        element: <CategoryListPage />,
      },
      {
        path: ROUTES.category.add,
        element: <CategoryAddPage />,
      },
      {
        path: ROUTES.user.add,
        element: <UsersAddPage />,
      },
      {
        path: ROUTES.pages.add,
        element: <PagesAdd />,
      },
      {
        path: ROUTES.pages.list,
        element: <PageListPage />,
      },
      {
        path: ROUTES.user.list,
        element: <UserListPage />,
      },
      {
        path: ROUTES.roles.list,
        element: <RolesListPage />,
      },
      {
        path: ROUTES.roles.add,
        element: <RolesAddPage />,
      },
      {
        path: ROUTES.settings,
        element: <Settings />,
      },
      {
        path: ROUTES.subscribers,
        element: <SubscribersListPage />,
      },
      {
        path: ROUTES.members.list,
        element: <MembersListPage />,
      },
      {
        path: ROUTES.members.add,
        element: <MembersAddPage />,
      },
    ],
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Routing;
