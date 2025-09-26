// *** IMPORTANT: REPLACE THIS URL with your deployed Google Apps Script Web App URL ***
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5lhGaXHudWg9l8TOf8L5A96ifRwKa_NQ81PhbIJVA6gLfPr7me6UB2lDEy9gg_WNXYg/exec';
import React, { useState, useEffect } from 'react';
import {
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  AlignJustify,
  Home,
  User,
  Clock3,
  List,
  BarChart2,
  GitPullRequest,
  FileText,
  Settings,
  LogOut,
  MoreVertical,
  Wallet,
  Calendar,
  Clipboard,
  Users,
  Clock,
  Briefcase,
  FileUp,
  UserPlus,
  Mail,
  Lock,
} from 'lucide-react';
// The following Firebase imports are left commented out as they are no longer needed for data handling.
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, doc, addDoc, onSnapshot, collection, query, where } from 'firebase/firestore';
// import { setLogLevel } from 'firebase/firestore';

// --- Configuration for Google Apps Script ---
// *** IMPORTANT: REPLACE THIS URL with your deployed Google Apps Script Web App URL ***
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzu758CIM3XOsHUuqT1mbr-tqckfeuhmrTmQ8oN95HDgZHBzPmqRtop-jOPiG5yeAZ4ww/exec'; 

// --- Component Definitions ---

// Login Page Component (remains unchanged for UI purposes)
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    console.log(`Attempting login for: ${email}`);
    onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-600 rounded-xl mx-auto flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-500">Sign in to access your HRIS dashboard</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-900">Remember me</label>
            </div>
            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Sidebar component
const Sidebar = ({ isOpen, onClose, currentPage, setCurrentPage }) => {
  const menuItems = [
    { name: 'Dashboard', icon: Home, page: 'dashboard' },
    { name: 'Employee', icon: User, page: 'employee' },
    { name: 'Time Attendance', icon: Clock3, page: 'time-attendance' },
    { name: 'Task', icon: List, page: 'task' },
    { name: 'Payroll', icon: Wallet, page: 'payroll' },
    { name: 'Performance', icon: BarChart2, page: 'performance' },
    { name: 'Recruitment', icon: GitPullRequest, page: 'recruitment' },
    { name: 'Report', icon: FileText, page: 'report' },
    { name: 'Organization', icon: MoreVertical, page: 'organization' },
  ];

  const profileItems = [
    { name: 'Profile', icon: User, page: 'profile' },
    { name: 'Setting', icon: Settings, page: 'settings' },
    { name: 'Logout', icon: LogOut, page: 'logout' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-full w-64 bg-white p-6 flex-col justify-between transition-transform duration-300 ease-in-out z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } lg:flex lg:flex-shrink-0`}
      >
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">HRIS</span>
          </div>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.page} className="relative group">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(item.page);
                    onClose();
                  }}
                  className={`flex items-center p-3 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200 ${currentPage === item.page ? 'bg-purple-100 text-purple-700 font-semibold' : ''}`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                  {item.name === 'Task' && (
                    <span className="ml-auto bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      9
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="w-full h-px bg-gray-200 my-6"></div>
          <ul className="space-y-2">
            {profileItems.map((item) => (
              <li key={item.page}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(item.page);
                    onClose();
                  }}
                  className={`flex items-center p-3 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200 ${currentPage === item.page ? 'bg-purple-100 text-purple-700 font-semibold' : ''}`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// Header component
const Header = ({ onMenuClick }) => (
  <header className="sticky top-0 bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-sm z-10 p-4">
    <div className="flex items-center justify-between">
      <div className="relative w-full max-w-sm">
        <button onClick={onMenuClick} className="lg:hidden p-2 mr-2 rounded-lg text-gray-600 hover:bg-gray-200">
          <AlignJustify size={24} />
        </button>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Looking for something?"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-300 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <Bell className="text-gray-500 hover:text-purple-600 transition-colors cursor-pointer" size={24} />
        <div className="h-8 w-px bg-gray-200"></div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://placehold.co/40x40/6a0dad/ffffff?text=P"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="hidden sm:inline text-sm font-medium text-gray-700">Profile</span>
          <ChevronDown size={16} className="text-gray-400 hidden sm:inline" />
        </div>
      </div>
    </div>
  </header>
);

// Welcome Card component
const WelcomeCard = () => (
  <div className="relative bg-purple-600 text-white rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-700 to-purple-500 opacity-20"></div>
    <div className="relative z-10 mb-4 md:mb-0">
      <h2 className="text-2xl lg:text-3xl font-bold mb-2">Welcome, Arabella Chloe!</h2>
      <p className="text-sm lg:text-base">You have 5 Pending tasks, let's see what you can do today!</p>
      <button className="mt-4 px-6 py-2 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        Check Now
      </button>
    </div>
    <div className="relative z-10 w-24 h-24 md:w-32 md:h-32">
      <img
        src="https://placehold.co/128x128/fff/6a0dad?text=A.C."
        alt="Arabella Chloe"
        className="w-full h-full object-cover rounded-full border-4 border-purple-400 shadow-xl"
      />
    </div>
  </div>
);

// Stats Card component
const StatsCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white rounded-2xl p-5 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
      <Icon className="text-purple-600" size={24} />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

// Task Statistic component (placeholder)
const TaskStatistic = () => {
  const chartData = [
    { color: '#ef4444', value: 20, label: 'Rejected' },
    { color: '#f59e0b', value: 10, label: 'On Hold' },
    { color: '#8b5cf6', value: 70, label: 'Completed' },
    { color: '#3b82f6', value: 50, label: 'In Progress' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Task Statistic</h3>
        <MoreVertical className="text-gray-400 cursor-pointer" size={20} />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-gray-200" strokeWidth="12" stroke="currentColor" fill="transparent" r="60" cx="70" cy="70" />
            <circle
              className="text-purple-600"
              strokeWidth="12"
              strokeDasharray={2 * Math.PI * 60}
              strokeDashoffset={(100 - 70) / 100 * (2 * Math.PI * 60)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="60"
              cx="70"
              cy="70"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800">70%</span>
        </div>
        <ul className="mt-4 sm:mt-0 sm:ml-8 space-y-2 text-sm">
          {chartData.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Star Employee component (placeholder)
const StarEmployee = () => {
  const employees = [
    { name: 'John Doe', title: 'Marcomm Senior Officer', tasks: 50, imageUrl: 'https://placehold.co/40x40/ffc83c/000?text=JD' },
    { name: 'Arabella Chloe', title: 'UI / UX Designer', tasks: 42, imageUrl: 'https://placehold.co/40x40/d1d1d1/000?text=AC' },
    { name: 'Ryan Kim', title: 'Project Manager', tasks: 38, imageUrl: 'https://placehold.co/40x40/f06292/000?text=RK' },
  ];
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Star Employee</h3>
        <MoreVertical className="text-gray-400 cursor-pointer" size={20} />
      </div>
      <ul className="space-y-4">
        {employees.map((employee, index) => (
          <li key={index} className="flex items-start space-x-4">
            <img src={employee.imageUrl} alt={employee.name} className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{employee.name}</p>
              <p className="text-sm text-gray-500">{employee.title}</p>
              <p className="text-xs text-gray-400">{employee.tasks} Tasks finished this month</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Calendar component with dynamic month and date generation (placeholder)
const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const totalDays = daysInMonth(currentDate);
  const firstDay = firstDayOfMonth(currentDate);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const daysArray = [...Array(firstDay).fill(null), ...Array(totalDays).fill(null).map((_, i) => i + 1)];

  const handlePrevMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
        <div className="flex items-center space-x-2">
          <ChevronLeft onClick={handlePrevMonth} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" size={20} />
          <ChevronRight onClick={handleNextMonth} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
        {dayNames.map((day, index) => (
          <div key={index} className="text-gray-400">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm mt-2">
        {daysArray.map((date, index) => (
          <div
            key={index}
            onClick={() => date && setSelectedDate(date)}
            className={`p-1 rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer ${
              !date ? 'text-gray-300' : date === selectedDate ? 'bg-purple-600 text-white font-semibold' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {date}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4 text-purple-600 text-sm font-medium cursor-pointer">
        <Calendar size={16} className="mr-2" />
        <span>Add Schedule</span>
      </div>
    </div>
  );
};

// Schedule Section component (placeholder)
const ScheduleSection = () => {
  const schedules = [
    { title: 'Huddle Meeting', date: '06/04/2022', time: '10:00 AM', icon: Users, color: '#3b82f6' },
    { title: 'Annual Meeting', date: '12/04/2022', time: '10:00 AM', icon: Calendar, color: '#8b5cf6' },
    { title: 'Meeting Day', date: '15/04/2022', time: '10:00 AM', icon: Clipboard, color: '#f59e0b' },
    { title: 'Good Friday', date: '16/04/2022', time: 'Public Holiday', icon: Clock, color: '#ef4444' },
    { title: 'Regional Meeting', date: '19/04/2022', time: '10:00 AM', icon: Briefcase, color: '#10b981' },
  ];
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-gray-800 mb-4">Schedule & Holidays</h3>
      {schedules.map((schedule, index) => (
        <div key={index} className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0 p-2 rounded-lg" style={{ backgroundColor: `${schedule.color}1A` }}>
            <schedule.icon size={20} style={{ color: schedule.color }} />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800 text-sm">{schedule.title}</p>
            <p className="text-xs text-gray-500 mt-1">{schedule.date}</p>
          </div>
          <p className="text-xs text-gray-400 flex-shrink-0">{schedule.time}</p>
        </div>
      ))}
    </div>
  );
};

// Birthday Section component (placeholder)
const BirthdaySection = () => {
  const birthdays = [
    { name: 'Dessy Path', title: 'Finance Specialist', date: '10/04' },
    { name: 'Anastasia Dee', title: 'Graphic Designer', date: '15/04' },
    { name: 'Arabella Chloe', title: 'UI / UX Designer', date: '22/04' },
  ];
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Birthdays</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500 cursor-pointer">
          <span className="hidden md:inline">This Month</span>
          <ChevronDown size={16} />
        </div>
      </div>
      {birthdays.map((bday, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <img src={`https://placehold.co/40x40/ddd/000?text=${bday.name.split(' ').map(n => n[0]).join('')}`} alt={bday.name} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1">
            <p className="font-semibold text-gray-800">{bday.name}</p>
            <p className="text-sm text-gray-500">{bday.title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{bday.date}</span>
            <button className="text-xs font-semibold text-purple-600 bg-purple-100 rounded-full px-3 py-1 hover:bg-purple-200 transition-colors">
              Send Gift
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Who is Online component (placeholder)
const WhoIsOnline = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchUsers = () => {
      setLoading(true);
      setTimeout(() => {
        setOnlineUsers([
          { name: 'John Doe', position: 'Marcomm Senior Officer', department: 'Dept. Marcomm', email: 'johndoe@hris.com', status: 'Online' },
          { name: 'Arabella Chloe', position: 'UI / UX Designer', department: 'Dept. UX', email: 'arabella@hris.com', status: 'Online' },
          { name: 'Alexander Stan', position: 'Programmer Senior Officer', department: 'Dept. Developer', email: 'alexanderstan@hris.com', status: 'Online' },
          { name: 'Elizabeth', position: 'HR Manager', department: 'Dept. HRD', email: 'elizabeth@hris.com', status: 'Offline' },
          { name: 'Michael Scott', position: 'Regional Manager', department: 'Dept. Sales', email: 'mscott@hris.com', status: 'Online' },
        ]);
        setLoading(false);
      }, 500);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Who's Online</h3>
        <ChevronDown size={20} className="text-gray-400 cursor-pointer" />
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading...</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg rounded-bl-lg">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg rounded-br-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {onlineUsers.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={`https://placehold.co/40x40/d1d1d1/000?text=${user.name.split(' ')[0].charAt(0)}${user.name.split(' ')[1]?.charAt(0) || ''}`} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

// Component for the Dashboard page
const DashboardContent = ({ onMenuClick }) => (
  <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
    <Header onMenuClick={onMenuClick} />
    <div className="mt-6 space-y-6">
      <WelcomeCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Employee" value="350" icon={Users} />
        <StatsCard title="Present" value="390" icon={Users} />
        <StatsCard title="Late" value="40" icon={Clock} />
        <StatsCard title="Annual Leave" value="50" icon={Briefcase} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TaskStatistic />
            <StarEmployee />
          </div>
          <div className="mt-6">
            <WhoIsOnline />
          </div>
        </div>
        <div className="col-span-1 space-y-6">
          <CalendarWidget />
          <ScheduleSection />
          <BirthdaySection />
        </div>
      </div>
    </div>
  </main>
);

// Employee Card Component
const EmployeeCard = ({ employee }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case 'NLE':
        return 'bg-[#FF2900] text-white';
      case 'On Leave':
        return 'bg-[#FFB108] text-white';
      case 'Active':
        return 'bg-[#98FB98] text-gray-800';
      case 'Probationary':
        return 'bg-[#FB98CA] text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const nameParts = employee.name ? employee.name.split(' ') : ['?'];
  const initials = nameParts.length > 1 ? `${nameParts[0][0]}${nameParts[1][0]}` : nameParts[0][0];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
      <img
        src={`https://placehold.co/100x100/d1d1d1/000?text=${initials}`}
        alt={employee.name}
        className="w-20 h-20 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 w-full">
        {/* Left Column (Employee Details) */}
        <div className="flex-1 space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-bold text-gray-900">{employee.name}</h3>
          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">ID:</span> {employee.id}</p>
          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Position:</span> {employee.position}</p>
          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Department:</span> {employee.department}</p>
          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Type:</span> {employee.type}</p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Status:</span>
            <span className={`inline-block ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(employee.status)}`}>
              {employee.status}
            </span>
          </p>
        </div>
        {/* Right Column (Reporting & Contact Info) */}
        <div className="flex-1 space-y-2 text-center sm:text-left">
          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Reports to:</span> {employee.reportsTo}</p>
          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Hire Date:</span> {employee.hireDate}</p>
          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Mobile:</span> {employee.mobile}</p>
          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Email:</span> {employee.email}</p>
        </div>
      </div>
    </div>
  );
};

// Add Employee Modal Component
const AddEmployeeModal = ({ isOpen, onClose, onAddEmployee }) => {
  const [formData, setFormData] = useState({
    id: `EMP${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
    name: '',
    address: '',
    mobile: '',
    email: '',
    sss: '',
    tin: '',
    hdmf: '',
    philhealth: '',
    hireDate: '',
    position: '',
    department: '',
    type: 'Full-time',
    status: 'Active',
    reportsTo: '',
    emergencyContact: {
      name: '',
      address: '',
      mobile: '',
      email: '',
      relation: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('emergencyContact.')) {
      const contactField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [contactField]: value,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(formData);
    onClose();
    // Reset form data after submission
    setFormData({
      id: `EMP${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      name: '',
      address: '',
      mobile: '',
      email: '',
      sss: '',
      tin: '',
      hdmf: '',
      philhealth: '',
      hireDate: '',
      position: '',
      department: '',
      type: 'Full-time',
      status: 'Active',
      reportsTo: '',
      emergencyContact: {
        name: '',
        address: '',
        mobile: '',
        email: '',
        relation: '',
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-xl font-bold text-gray-800 mb-6">Add New Employee</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Employee Details Section */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-700 mb-2">Employee Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="hidden" name="id" value={formData.id} />
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" required />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" required />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Mobile Number</label>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" required />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" required />
              </div>
            </div>
          </div>
          {/* Government IDs Section */}
          <div className="md:col-span-2 mt-4">
            <h4 className="font-semibold text-gray-700 mb-2">Government ID Numbers</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">SSS</label>
                <input type="text" name="sss" value={formData.sss} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">TIN</label>
                <input type="text" name="tin" value={formData.tin} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">HDMF</label>
                <input type="text" name="hdmf" value={formData.hdmf} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Philhealth</label>
                <input type="text" name="philhealth" value={formData.philhealth} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
            </div>
          </div>
          {/* Employment Details Section */}
          <div className="md:col-span-2 mt-4">
            <h4 className="font-semibold text-gray-700 mb-2">Employment Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Hire Date</label>
                <input type="date" name="hireDate" value={formData.hireDate} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" required />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Position</label>
                <input type="text" name="position" value={formData.position} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" required />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Department</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" required />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Type</label>
                <select name="type" value={formData.type} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Status</label>
                <select name="status" value={formData.status} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200">
                  <option>Active</option>
                  <option>On Leave</option>
                  <option>NLE</option>
                  <option>Probationary</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Reports to</label>
                <input type="text" name="reportsTo" value={formData.reportsTo} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
            </div>
          </div>
          {/* Emergency Contact Section */}
          <div className="md:col-span-2 mt-4">
            <h4 className="font-semibold text-gray-700 mb-2">Emergency Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Full Name</label>
                <input type="text" name="emergencyContact.name" value={formData.emergencyContact.name} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Address</label>
                <input type="text" name="emergencyContact.address" value={formData.emergencyContact.address} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Mobile Number</label>
                <input type="tel" name="emergencyContact.mobile" value={formData.emergencyContact.mobile} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Email Address</label>
                <input type="email" name="emergencyContact.email" value={formData.emergencyContact.email} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 mb-1">Relation</label>
                <input type="text" name="emergencyContact.relation" value={formData.emergencyContact.relation} onChange={handleChange} className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" />
              </div>
            </div>
          </div>
          {/* Form Actions */}
          <div className="md:col-span-2 flex justify-end mt-6 space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Employee Page Component (UPDATED to use Google Apps Script API)
const EmployeePage = ({ onMenuClick }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [fileName, setFileName] = useState('');

  // Function to fetch data from Google Sheets API
  const fetchEmployees = async () => {
    if (SCRIPT_URL === 'https://script.google.com/macros/s/AKfycbzu758CIM3XOsHUuqT1mbr-tqckfeuhmrTmQ8oN95HDgZHBzPmqRtop-jOPiG5yeAZ4ww/exec') {
      console.error("ERROR: SCRIPT_URL is not configured. Please replace the placeholder in App.jsx.");
      setEmployees([]);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    try {
      // Use GET request (default for fetch) to retrieve data
      const response = await fetch(SCRIPT_URL);
      const result = await response.json();
      
      if (result.status === 200 && Array.isArray(result.data)) {
        // The API returns an array of objects
        setEmployees(result.data);
      } else {
        console.error("API Error or Invalid response structure:", result);
        setEmployees([]);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
    // Since Google Sheets isn't real-time, we'll poll for updates every 10 seconds.
    // In a production app, you might use Pub/Sub or WebSockets for real-time updates.
    const interval = setInterval(fetchEmployees, 10000); 
    return () => clearInterval(interval);
  }, []);

  // Function to add a new employee via Google Sheets API (POST request)
  const handleAddEmployee = async (newEmployeeData) => {
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send the employee data as a JSON string in the body
        body: JSON.stringify(newEmployeeData),
      });
      
      const result = await response.json();
      
      if (result.status === 200) {
        console.log("Employee added successfully:", result.message);
        // Refresh the list immediately to show the new employee
        await fetchEmployees();
      } else {
        console.error("Failed to add employee:", result.details || result.message);
      }
    } catch (e) {
      console.error("Error sending data to Apps Script:", e);
    }
  };

  const filteredEmployees = employees.filter(employee =>
    (employee.name && employee.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (employee.id && employee.id.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (employee.email && employee.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handle file upload UI (placeholder)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      // In a real application, you would handle the file upload here.
      console.log('File selected:', file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <Header onMenuClick={onMenuClick} />
      <div className="mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <h2 className="text-2xl font-bold text-gray-900">Employee List</h2>
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-300 transition-all"
              />
            </div>
            <label className="relative flex items-center cursor-pointer bg-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors">
              <FileUp size={20} className="mr-2" />
              <span>Upload</span>
              <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" accept=".csv, .xlsx" />
            </label>
            <button
              className="flex items-center cursor-pointer bg-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              <UserPlus size={20} className="mr-2" />
              <span>Add Employee</span>
            </button>
            {fileName && (
              <span className="text-sm text-gray-500 mt-2 md:mt-0">{fileName} selected</span>
            )}
          </div>
        </div>
        {loading ? (
          <div className="text-center py-10 text-gray-500">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4">Loading employees from Google Sheets...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee, index) => (
                // Using index as a fallback key since Google Sheets data doesn't have a guaranteed unique key like Firestore doc.id,
                // but the employee ID should ideally be unique.
                <EmployeeCard key={employee.id || index} employee={employee} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                No employees found in the Google Sheet. Click 'Add Employee' to start!
              </div>
            )}
          </div>
        )}
      </div>
      <AddEmployeeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddEmployee={handleAddEmployee} />
    </main>
  );
};

// Component for other pages
const OtherPage = ({ pageName, onMenuClick }) => (
  <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
    <Header onMenuClick={onMenuClick} />
    <div className="mt-6 flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold text-gray-800">You are on the {pageName} page.</h2>
      <p className="text-gray-500 mt-2">This is a placeholder to show navigation works.</p>
    </div>
  </main>
);

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('employee'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  // NOTE: Firebase initialization code removed/commented out as it's no longer used for data

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Set to 'employee' view so you can test the Google Sheets connectivity right away
    setCurrentPage('employee'); 
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderMainContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardContent onMenuClick={() => setIsSidebarOpen(true)} />;
      case 'employee':
        return <EmployeePage onMenuClick={() => setIsSidebarOpen(true)} />;
      case 'logout':
        setIsLoggedIn(false);
        return <LoginPage onLogin={handleLogin} />;
      default:
        return <OtherPage pageName={currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} onMenuClick={() => setIsSidebarOpen(true)} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans antialiased text-gray-800">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`body { font-family: 'Inter', sans-serif; }`}</style>
      <script src="https://cdn.tailwindcss.com"></script>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderMainContent()}
    </div>
  );
}
