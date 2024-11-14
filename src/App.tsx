import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./pages/Home/Home";
import MyPage from "./pages/MyPage/MyPage";
import Profile from "./pages/MyPage/Profile";
import Posts from "./pages/MyPage/Posts";
import Likes from "./pages/MyPage/Likes";
import Scrap from "./pages/MyPage/Scraps";
import EditProfile from "./pages/MyPage/EditProfile";
// import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import FindPassword from "./pages/Auth/FindPassword";
import "./App.css";
import "./styles/fonts.css";
import Header from "./components/Header";
import QuestionDetail from "./pages/QnA/QuestionDetail";
import QuestionRegister from "./pages/QnA/QuestionRegister";
import Board from "./pages/QnA/Board";
import FindBank from "./pages/Location/FindBank";
import NotFound from "./pages/Error/404";
import Community from "./pages/Community/Community";
import Gwangjin from "./pages/LandingPage/Gwangjin";
import Seocho from "./pages/LandingPage/Seocho";
import BankerProfile from './pages/BankerProfile/Profile';
import CommunityRegister from './pages/Community/CommunityRegister';
import UserRegister from "./pages/Auth/UserRegister";
import BankerRegister from './pages/Auth/BankerRegister';
import LandingForRegister from './pages/Auth/LandingForRegister';
import Chatbot from "./components/chatbot";
import CommunityDetail from "./pages/Community/CommunityDetail";
import SetDistrict from "./pages/MyPage/SetDistrict";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#008485",
        },
      }}
    >
      <Router>
        <div className="h-dvh flex flex-col">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my" element={<MyPage />}>
              <Route path="profile" element={<Profile />} />
              <Route path="posts" element={<Posts />} />
              <Route path="likes" element={<Likes />} />
              <Route path="scrap" element={<Scrap />} />
              <Route path="edit" element={<EditProfile />} />
              <Route path="district" element={<SetDistrict />} />
            </Route>
            {/* You can add other routes here as needed */}
            <Route path="/register" element={<LandingForRegister />} />
            <Route path="/register/user" element={<UserRegister />} />
            <Route path="/register/banker" element={<BankerRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findPassword" element={<FindPassword />} />
            <Route path="/qna" element={<Board />} />
            <Route path="/qna/regist" element={<QuestionRegister />} />
            <Route path="/qna/detail/:postId" element={<QuestionDetail />} />
            <Route path="/findbank" element={<FindBank />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/regist" element={<CommunityRegister />} />
            <Route path="/community/detail/:postId" element={<CommunityDetail />} />
            <Route path="/gwangjin" element={<Gwangjin />}></Route>
            <Route path="/seocho" element={<Seocho />}></Route>
            <Route path="/bankerProfile" element={<BankerProfile />}></Route>
            <Route path="/chatbot" element={<Chatbot />}></Route>

            {/* Error */}
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
