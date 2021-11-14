import "./App.css";
import "./MyComponents/Components/FontAwesomeIcons";

import AdminRoute from "./MyComponents/DashBoard/Admin/Components/AdminRoutes";
import StudentRoutes from "./MyComponents/DashBoard/Student/Components/StudentRoutes";

import Covid from "./MyComponents/Main/Covid";
import Footer from "./MyComponents/Partials/Footer.jsx";
import Home from "./MyComponents/Main/Home.jsx";
import SignUp from "./MyComponents/User/SignUp.jsx";
import Contact from "./MyComponents/Main/Contact.jsx";
import About from "./MyComponents/Main/About.jsx";
import Jobs from "./MyComponents/Main/Jobs.jsx";
import Services from "./MyComponents/Main/Services.jsx";
import Training from "./MyComponents/Main/Training.jsx";
import Technology from "./MyComponents/Main/Technology/Technology";
import IncidentReporting from "./MyComponents/Main/Technology/IncidentReporting.jsx";
import ToursCheckpoints from "./MyComponents/Main/Technology/ToursCheckpoints.jsx";
import DispatchTasks from "./MyComponents/Main/Technology/DispatchTasks.jsx";
import ReportsData from "./MyComponents/Main/Technology/ReportsData.jsx";
import Communication from "./MyComponents/Main/Technology/Communication.jsx";
import MobilePatrols from "./MyComponents/Main/Technology/MobilePatrols.jsx";
import OrganisationStructure from "./MyComponents/Main/OrganisationStructure.jsx";
import HarassementPolicy from "./MyComponents/Main/HarassementPolicy";
import Personell from "./MyComponents/Main/Personell";
import ScrollToTop from "./Functions/ScrollToTop";

import SignupForStudents from "./MyComponents/DashBoard/Student/Signup";
import LoginForStudent from "./MyComponents/DashBoard/Student/Login";
import StudentHome from "./MyComponents/DashBoard/Student/Home.jsx";
import StudentCalendar from "./MyComponents/DashBoard/Student/Calendar.jsx";
import StudentPurchase from "./MyComponents/DashBoard/Student/PurchaseCourse.jsx";
import StudentCourse from "./MyComponents/DashBoard/Student/Training";
import StudentContact from "./MyComponents/DashBoard/Student/Contact";
import StudentHistory from "./MyComponents/DashBoard/Student/History";
import ChangePassword from "./MyComponents/DashBoard/Student/ChangePassword";
import Mypurchases from "./MyComponents/DashBoard/Student/MyPurchases";

import LoginForAdmin from "./MyComponents/DashBoard/Admin/AdminControl/LoginForAdmin";
import AdminHome from "./MyComponents/DashBoard/Admin/Home";
import AdminHomeControls from "./MyComponents/DashBoard/Admin/HomePageControls";
import AdminStatistics from "./MyComponents/DashBoard/Admin/Statistics";
import AdminCourseControl from "./MyComponents/DashBoard/Admin/CourseControl";
import AdminContactControl from "./MyComponents/DashBoard/Admin/ContactFormMessages";
import AdminLmsHome from "./MyComponents/DashBoard/Admin/LmsHome";
import AdminPasswordChange from "./MyComponents/DashBoard/Admin/ChangePassword";
import ManageCoupons from "./MyComponents/DashBoard/Admin/Components/LMS/Form/Course/ManageCoupon";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContact } from "./context/actions/adminActions/contactAction";
import { getTestimonial } from "./context/actions/adminActions/testimonialAction";
import { getEOM } from "./context/actions/adminActions/eomAction";
import { getClientCarousel } from "./context/actions/adminActions/clientsAction";
import { getTeam } from "./context/actions/adminActions/teamAction";
import HomeRoute from "./MyComponents/Main/homeRoutes";
import { getToken } from "./context/actions/authActions/setStorageAction";
import { getUser } from "./context/actions/authActions/getUserAction";
import { useSelector } from "react-redux";
import UploadDocs from "./MyComponents/DashBoard/Student/UploadDocs";
import MyTranscripts from "./MyComponents/DashBoard/Student/MyTranscripts";
import LmsInstructor from "./MyComponents/DashBoard/Admin/LmsInstructor";
import LmsStudent from "./MyComponents/DashBoard/Admin/LmsStudent";
import LmsLicense from "./MyComponents/DashBoard/Admin/LmsLicense";
import CoursePage from "./MyComponents/DashBoard/Admin/Components/LMS/Form/CoursePages/CoursePage";
import ModulePage from "./MyComponents/DashBoard/Admin/Components/LMS/Form/CoursePages/ModulePage";
import ChapterPage from "./MyComponents/DashBoard/Admin/Components/LMS/Form/CoursePages/ChapterPage";
import PaymentPage from "./MyComponents/DashBoard/Student/PaymentPage";
import Course from "./MyComponents/DashBoard/Student/Course";
import Modules from "./MyComponents/DashBoard/Student/Modules";
import Chapter from "./MyComponents/DashBoard/Student/Chapter";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getToken());
    dispatch(getContact());
    dispatch(getTestimonial());
    dispatch(getEOM());
    dispatch(getClientCarousel());
    dispatch(getTeam());
  }, [dispatch]);

  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <switch>
          <HomeRoute path="/" exact component={Home} />
          <HomeRoute path="/about" exact component={About} />
          <HomeRoute path="/jobs" exact component={Jobs} />
          <HomeRoute path="/contact" exact component={Contact} />
          <HomeRoute path="/signup" component={SignUp} />
          <HomeRoute path="/courses" component={Training} />
          <HomeRoute path="/services" component={Services} />
          <HomeRoute path="/technology" component={Technology} />

          <HomeRoute path="/covid" component={Covid} />

          <HomeRoute path="/incidentreporting" component={IncidentReporting} />
          <HomeRoute path="/tours&checkpoints" component={ToursCheckpoints} />
          <HomeRoute path="/dispatch&tasks" component={DispatchTasks} />
          <HomeRoute path="/reports&data" component={ReportsData} />
          <HomeRoute path="/communication" component={Communication} />
          <HomeRoute path="/mobilepatrols" component={MobilePatrols} />
          <HomeRoute
            path="/organisationstructure"
            component={OrganisationStructure}
          />
          <HomeRoute path="/harassementpolicy" component={HarassementPolicy} />
          <HomeRoute path="/personell" component={Personell} />

          <HomeRoute
            path="/dashboard/student/signup"
            component={SignupForStudents}
          />
          <StudentRoutes
            path="/dashboard/student/home"
            component={StudentHome}
          />
          <StudentRoutes
            path="/dashboard/student/calendar"
            component={StudentCalendar}
          />
          <StudentRoutes
            path="/dashboard/student/purchase"
            component={StudentPurchase}
          />
          <StudentRoutes
            path="/dashboard/student/payment/:courseId"
            component={PaymentPage}
          />

          <StudentRoutes
            path="/dashboard/student/training"
            component={StudentCourse}
          />
          <StudentRoutes
            path="/dashboard/student/contact"
            component={StudentContact}
          />
          <StudentRoutes
            path="/dashboard/student/history"
            component={StudentHistory}
          />
          <StudentRoutes
            path="/dashboard/student/changepassword"
            component={ChangePassword}
          />
          <StudentRoutes
            path="/dashboard/student/mypurchases"
            component={Mypurchases}
          />
          <StudentRoutes
            path="/dashboard/student/mytranscripts"
            component={MyTranscripts}
          />
          <StudentRoutes
            path="/dashboard/student/documents"
            component={UploadDocs}
          />
          <StudentRoutes
            exact
            path="/dashboard/student/course"
            component={Course}
          />
          <StudentRoutes
            exact
            path="/dashboard/student/course/:courseId/module"
            component={Modules}
          />
          <StudentRoutes
            path="/dashboard/student/course/:courseId/module/:moduleId/chapter/:nextModule"
            component={Chapter}
          />

          {/* Administrator Routes */}

          <Route path="/dashboard/admin/login" component={LoginForAdmin} />
          <AdminRoute path="/dashboard/admin/home" component={AdminHome} />
          <AdminRoute
            path="/dashboard/admin/websitecontrols"
            component={AdminHomeControls}
          />
          <AdminRoute
            path="/dashboard/admin/changepassword"
            component={AdminPasswordChange}
          />
          <AdminRoute
            path="/dashboard/admin/statistics"
            component={AdminStatistics}
          />
          <AdminRoute
            path="/dashboard/admin/coursecontrol"
            component={AdminCourseControl}
          />
          <AdminRoute
            path="/dashboard/admin/contactformmessages"
            component={AdminContactControl}
          />
          <AdminRoute
            path="/dashboard/admin/lms/home"
            component={AdminLmsHome}
          />
          <AdminRoute
            path="/dashboard/admin/lms/license"
            component={LmsLicense}
          />
          <AdminRoute
            path="/dashboard/admin/lms/student"
            component={LmsStudent}
          />
          <AdminRoute
            path="/dashboard/admin/lms/instructor"
            component={LmsInstructor}
          />
          <AdminRoute
            exact
            path="/dashboard/admin/lms/course/:courseId"
            component={CoursePage}
          />
          <AdminRoute
            path="/dashboard/admin/lms/course/:courseId/module/:moduleId"
            component={ModulePage}
          />
          <AdminRoute
            path="/dashboard/admin/lms/course/:courseId/chapter/:chapterId"
            component={ChapterPage}
          />
          <AdminRoute
            path="/dashboard/admin/coupon"
            component={ManageCoupons}
          />
        </switch>
      </div>
    </Router>
  );
}

export default App;
