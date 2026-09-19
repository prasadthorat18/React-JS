import React from "react";
import Card from "./components/Card";

const jobOpenings = [
  {
    brandLogo:
      "https://imgs.search.brave.com/7oRMZ5ifuTywDSOtzsemEMjW7jsmHMLZeDMZPLycObU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
    companyName: "Google",
    posted: "5 days ago",
    role: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Fresher",
    pay: "$45/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/BTkju2Opf17i7A7IjNaxZV8lx6lsLbycvNH5JW7wrr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC13/aW5kb3ctbG9nby1l/bWJsZW0tMC5wbmc",
    companyName: "Microsoft",
    posted: "1 week ago",
    role: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/Arw_-VusWSlLFSDoyOCqIwDqP0UNNygniVSmVgCpHFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctMTkxMjA1/OC5wbmc_Zj13ZWJw/Jnc9MTI4",
    companyName: "Amazon",
    posted: "3 days ago",
    role: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Pune, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/H7tLXmff7tqNQRCQGAzEiNWMG_0GpTuIMUQtp9bXLmQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NhLzE0/LzZjL2NhMTQ2YzQy/ZDUxMTI1OTljOGMy/ZjRkNDdmMTExMzky/LmpwZw",
    companyName: "Infosys",
    posted: "2 weeks ago",
    role: "Java Developer",
    tag1: "Full-time",
    tag2: "Fresher",
    pay: "$25/hr",
    location: "Pune, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/ll08WyeisibDICyh5c8roZl0CeUXPDVVHaKqLuFWbhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3Rjcy10/YXRhLWNvbnN1bHRh/bmN5LXNlcnZpY2Vz/Mjc5Mi5sb2dvd2lr/LmNvbS53ZWJw",
    companyName: "TCS",
    posted: "6 days ago",
    role: "React Developer",
    tag1: "Part-time",
    tag2: "Fresher",
    pay: "$20/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/iC9l7b78_hZJm7bJ4CVLNUv_Bho4kSq8uQe0n4Sr_BU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/c2FsZXNmb3JjZS5z/dmc",
    companyName: "Salesforce",
    posted: "4 days ago",
    role: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    companyName: "Adobe",
    posted: "1 day ago",
    role: "UI/UX Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Noida, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/0pbAjdXdDiEUsNdxwrhnx8j4Ytj8My4DKFHWZfOwql4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvU3Bv/dGlmeS1Mb2dvLVBO/Ry1QaG90b3MucG5n",
    companyName: "Spotify",
    posted: "3 weeks ago",
    role: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/FVk19AYcFgZ56dZmdqXNA3ts9mJHil2EZN-eTJThWGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQwLzIvcmF6b3Jw/YXktbG9nby1wbmdf/c2Vla2xvZ28tNDA5/NDc3LnBuZw",
    companyName: "Razorpay",
    posted: "2 days ago",
    role: "SDE Intern",
    tag1: "Internship",
    tag2: "Fresher",
    pay: "$15/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/hXkaZ_xe8abo8N_Qj0y5dK3u1DTEzWYlz-14_atYpXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC8z/Y2ZmNTAxMDYxNjM0/NTEuWTNKdmNDd3hN/elV4TERFd05UWXNN/Q3d4TkRjLmpwZw",
    companyName: "Flipkart",
    posted: "1 week ago",
    role: "Software Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Bangalore, India",
  },
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (el) {
        return (
          <Card
            logo={el.brandLogo}
            company={el.companyName}
            posted={el.posted}
            role={el.role}
            tag1={el.tag1}
            tag2={el.tag2}
            pay={el.pay}
            location={el.location}
          />
        );
      })}
    </div>
  );
};

export default App;
