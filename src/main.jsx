import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowRight, Check, ChevronDown, Clock3, Headphones, LockKeyhole,
  Menu, Mic2, Music2, Play, ShieldCheck, Sparkles, Star, X, Instagram,
  Youtube, Facebook, UserRound, BookOpen, CirclePlay, Award, Search
} from "lucide-react";
import "./styles.css";

const courses = [
  {title:"Vocal Foundations", level:"Beginner", lessons:28, hours:"6h 40m", price:"₹2,499", old:"₹3,999", tag:"Bestseller", art:"vocal"},
  {title:"Bollywood Singing Mastery", level:"Intermediate", lessons:36, hours:"9h 15m", price:"₹3,999", old:"₹5,999", tag:"Popular", art:"bollywood"},
  {title:"Guitar for Singers", level:"Beginner", lessons:24, hours:"5h 20m", price:"₹1,999", old:"₹2,999", tag:"New", art:"guitar"},
  {title:"Advanced Voice & Performance", level:"Advanced", lessons:31, hours:"8h 05m", price:"₹4,999", old:"₹6,999", tag:"Premium", art:"stage"}
];

function App(){
  const [menu,setMenu]=useState(false);
  const [modal,setModal]=useState(null);
  const [activeCourse,setActiveCourse]=useState(courses[0]);
  const [toast,setToast]=useState("");

  const showToast=(msg)=>{setToast(msg); setTimeout(()=>setToast(""),2200)};

  return <div className="app">
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={()=>setMenu(false)}>
          <span className="brand-mark"><Music2 size={19}/></span>
          <span>HARMONY<span className="brand-dot">.</span></span>
        </a>
        <nav className={menu?"nav-links open":"nav-links"}>
          <a href="#courses" onClick={()=>setMenu(false)}>Courses</a>
          <a href="#method" onClick={()=>setMenu(false)}>How it works</a>
          <a href="#teachers" onClick={()=>setMenu(false)}>Teachers</a>
          <a href="#reviews" onClick={()=>setMenu(false)}>Reviews</a>
          <button className="nav-login" onClick={()=>{setModal("login");setMenu(false)}}>Log in</button>
          <button className="btn btn-small" onClick={()=>{setModal("signup");setMenu(false)}}>Start learning</button>
        </nav>
        <button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14}/> PREMIUM ONLINE MUSIC ACADEMY</div>
          <h1>Find your voice.<br/><em>Own the stage.</em></h1>
          <p>Learn singing, guitar, music theory and performance from experienced artists — with structured lessons you can follow at your own pace.</p>
          <div className="hero-actions">
            <a className="btn" href="#courses">Explore courses <ArrowRight size={17}/></a>
            <button className="watch-btn" onClick={()=>setModal("trailer")}><span><Play size={15} fill="currentColor"/></span> Watch trailer</button>
          </div>
          <div className="trust-row">
            <div className="avatars"><span>AK</span><span>RS</span><span>PM</span><span>+2k</span></div>
            <div><strong>2,000+ learners</strong><small>already finding their sound</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-image stage-art"><div className="spotlight"></div><div className="mic"><Mic2 size={80}/></div><div className="music-lines">♪</div></div>
            <div className="floating-card lesson-float"><div className="mini-play"><Play size={13} fill="currentColor"/></div><div><b>Today's lesson</b><span>Breath & vocal control</span></div><strong>12:40</strong></div>
            <div className="floating-card rating-float"><Star size={16} fill="currentColor"/><div><b>4.9/5</b><span>Student rating</span></div></div>
          </div>
        </div>
      </section>

      <section className="logos"><span>TRUSTED BY LEARNERS WHO LOVE</span><div><b>SONG</b><b>STAGE</b><b>VOICE</b><b>RHYTHM</b><b>SOUND</b></div></section>

      <section id="courses" className="section courses-section">
        <div className="section-head"><div><div className="eyebrow">LEARN YOUR WAY</div><h2>Courses built for <em>real progress.</em></h2></div><button className="text-btn" onClick={()=>showToast("Course catalog demo — more courses coming soon.")}>View all courses <ArrowRight size={16}/></button></div>
        <div className="course-grid">
          {courses.map((c,i)=><CourseCard key={c.title} course={c} onView={()=>{setActiveCourse(c);setModal("course")}} onBuy={()=>{setActiveCourse(c);setModal("checkout")}}/> )}
        </div>
      </section>

      <section id="method" className="dark-section">
        <div className="section narrow">
          <div className="eyebrow">THE HARMONY METHOD</div>
          <h2>Everything you need to <em>sound better.</em></h2>
          <p className="lead">A simple learning system designed to take you from “I wish I could sing” to confidently performing your favorite songs.</p>
          <div className="steps">
            <Step n="01" icon={<BookOpen/>} title="Learn" text="Short, focused lessons explain the technique without overwhelming you."/>
            <Step n="02" icon={<Headphones/>} title="Practice" text="Guided exercises and downloadable practice sheets keep you consistent."/>
            <Step n="03" icon={<Mic2/>} title="Perform" text="Apply every skill to real songs and build confidence with performance tasks."/>
          </div>
        </div>
      </section>

      <section className="section feature-security">
        <div className="security-visual">
          <div className="secure-screen">
            <div className="screen-top"><span className="live-dot"></span> PRIVATE LESSON <span>12:08 / 28:45</span></div>
            <div className="video-placeholder"><CirclePlay size={58}/><div className="watermark">HARMONY • STUDENT PREVIEW</div></div>
            <div className="screen-controls"><span>1×</span><span>HD</span><span>🔒 Protected</span></div>
          </div>
          <div className="shield"><ShieldCheck size={22}/><span><b>Protected learning</b><small>Secure streaming ready</small></span></div>
        </div>
        <div className="security-copy">
          <div className="eyebrow">YOUR COURSE. YOUR ACCESS.</div>
          <h2>A premium learning experience with <em>security built in.</em></h2>
          <p>Paid lessons are designed to be streamed through authenticated accounts. The production version can add signed playback, DRM and personalized watermarking to protect your content.</p>
          <ul className="check-list">
            <li><Check/> Private student accounts</li><li><Check/> Purchase-based course access</li><li><Check/> Secure streaming architecture</li><li><Check/> Personalized video watermarking</li>
          </ul>
        </div>
      </section>

      <section id="teachers" className="teacher-section">
        <div className="section teacher-inner">
          <div className="teacher-photo"><div className="portrait"><Mic2 size={86}/><span>YOUR PHOTO</span></div></div>
          <div className="teacher-copy"><div className="eyebrow">MEET YOUR MENTOR</div><h2>Learn from artists who <em>teach from experience.</em></h2><p>Replace this section with your own story, achievements, YouTube/Instagram links and teaching philosophy. The layout is already ready for your brand.</p><div className="teacher-stats"><div><b>10+</b><span>Years teaching</span></div><div><b>2K+</b><span>Students</span></div><div><b>4.9</b><span>Average rating</span></div></div><button className="btn" onClick={()=>showToast("Teacher profile demo")}>Meet the teacher <ArrowRight size={17}/></button></div>
        </div>
      </section>

      <section id="reviews" className="section reviews">
        <div className="section-head"><div><div className="eyebrow">STUDENT STORIES</div><h2>Small practice. <em>Big changes.</em></h2></div></div>
        <div className="review-grid">
          <Review text="The lessons are structured so well. I finally understand what I was doing wrong with my breath support." name="Riya Sharma" role="Vocal Foundations"/>
          <Review text="I went from being scared to sing in front of friends to performing at my college event. Huge confidence boost." name="Arjun Mehta" role="Performance student"/>
          <Review text="The practice exercises are short enough that I actually stay consistent. That made the biggest difference." name="Priya Kumari" role="Bollywood Singing Mastery"/>
        </div>
      </section>

      <section className="cta-section"><div><div className="eyebrow">YOUR NEXT NOTE STARTS HERE</div><h2>Ready to make music<br/><em>part of your life?</em></h2><p>Start with a course and build your skills one lesson at a time.</p><button className="btn" onClick={()=>document.getElementById("courses").scrollIntoView({behavior:"smooth"})}>Explore courses <ArrowRight size={17}/></button></div></section>
    </main>

    <footer><div className="footer-top"><div><a className="brand" href="#home"><span className="brand-mark"><Music2 size={19}/></span><span>HARMONY<span className="brand-dot">.</span></span></a><p>Learn music with clarity, consistency and confidence.</p></div><div className="footer-links"><div><b>Explore</b><a href="#courses">Courses</a><a href="#method">Method</a><a href="#teachers">Teachers</a></div><div><b>Support</b><a href="#">FAQ</a><a href="#">Contact</a><a href="#">Privacy</a></div><div><b>Follow</b><div className="socials"><Instagram/><Youtube/><Facebook/></div></div></div></div><div className="footer-bottom"><span>© 2026 Harmony Music Academy</span><span>Made for people who love music.</span></div></footer>

    {modal && <Modal type={modal} course={activeCourse} close={()=>setModal(null)} onToast={showToast}/>}
    {toast && <div className="toast"><Check size={16}/>{toast}</div>}
  </div>
}

function CourseCard({course,onView,onBuy}){
  return <article className="course-card">
    <div className={"course-art "+course.art}><span className="tag">{course.tag}</span><div className="art-icon">{course.art==="guitar"?"♬":course.art==="stage"?"✦":"♪"}</div></div>
    <div className="course-body"><div className="course-meta"><span>{course.level}</span><span>•</span><span>{course.lessons} lessons</span><span>•</span><span>{course.hours}</span></div><h3>{course.title}</h3><div className="course-bottom"><div><strong>{course.price}</strong><del>{course.old}</del></div><button onClick={onView}>View course</button></div></div>
  </article>
}
function Step({n,icon,title,text}){return <div className="step"><span className="step-number">{n}</span><div className="step-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>}
function Review({text,name,role}){return <article className="review"><div className="stars">★★★★★</div><p>“{text}”</p><div className="reviewer"><span>{name.split(" ").map(x=>x[0]).join("")}</span><div><b>{name}</b><small>{role}</small></div></div></article>}

function Modal({type,course,close,onToast}){
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  if(type==="course") return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&close()}><div className="modal course-modal"><button className="close" onClick={close}><X/></button><div className={"modal-art "+course.art}><span>{course.tag}</span><div>{course.art==="guitar"?"♬":"♪"}</div></div><div className="modal-content"><div className="eyebrow">{course.level} • {course.lessons} LESSONS • {course.hours}</div><h2>{course.title}</h2><p>Learn step-by-step with structured video lessons, exercises and real-song practice. This demo shows the frontend course purchase flow.</p><ul className="check-list"><li><Check/> Lifetime course access</li><li><Check/> Practice resources</li><li><Check/> Student dashboard</li></ul><div className="modal-price"><strong>{course.price}</strong><del>{course.old}</del><button className="btn" onClick={()=>{close();onToast("Demo checkout opened — payment integration comes next.")}}>Buy this course <ArrowRight size={16}/></button></div></div></div></div>;
  if(type==="checkout") return <div className="modal-backdrop"><div className="modal auth"><button className="close" onClick={close}><X/></button><div className="eyebrow">SECURE CHECKOUT</div><h2>Enroll in {course.title}</h2><p className="muted">Frontend demo — no real payment is processed.</p><input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)}/><input placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)}/><div className="fake-pay"><LockKeyhole size={17}/> Secure payment powered by your future gateway</div><button className="btn full" onClick={()=>{close();onToast("Demo order created. Connect Razorpay/Stripe in the backend.")}}>Continue to payment <ArrowRight size={16}/></button></div></div>;
  if(type==="trailer") return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&close()}><div className="modal trailer"><button className="close" onClick={close}><X/></button><div className="trailer-screen"><Play size={70} fill="currentColor"/><span>YOUR INTRO / TRAILER VIDEO</span></div><h3>Welcome to Harmony</h3><p>This is a visual placeholder for your academy trailer.</p></div></div>;
  return <div className="modal-backdrop"><div className="modal auth"><button className="close" onClick={close}><X/></button><div className="auth-logo"><Music2/></div><h2>{type==="login"?"Welcome back":"Start your music journey"}</h2><p className="muted">{type==="login"?"Log in to access your courses.":"Create an account to start learning."}</p>{type==="signup"&&<input placeholder="Full name"/>}<input placeholder="Email address"/><input placeholder="Password" type="password"/><button className="btn full" onClick={()=>{close();onToast(type==="login"?"Demo login successful.":"Demo account created.")}}>{type==="login"?"Log in":"Create account"} <ArrowRight size={16}/></button><small className="legal">By continuing, you agree to our Terms and Privacy Policy.</small></div></div>
}

createRoot(document.getElementById("root")).render(<App/>);