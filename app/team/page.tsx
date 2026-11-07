'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import Link from 'next/link';

const teamData = [
  {
    department: 'ê²½ì˜ì§?(Leadership)',
    color: '#ff6b6b',
    members: [
      { name: '?•ê°•??(Mark)', role: '?€??, email: 'mark@realwork.group', phone: '010-5767-5799', birthday: '5??11?? },
      { name: '?´ì—°??(Abby)', role: 'ë¶€?¬ì¥', email: 'abby@realwork.group', phone: '010-2077-8969', birthday: '1??24?? },
    ]
  },
  {
    department: 'FT (?¼ì‹¤ë¦¬í…Œ?´í„°)',
    color: '#4ecdc4',
    members: [
      { name: 'ê°•í‰??(Peace)', role: '?Œì¥', email: 'peace@realwork.group', phone: '010-9547-0905', birthday: '5??23?? },
      { name: '? ìš©ì£?(Billy)', role: '?Œì¥', email: 'billy@realwork.group', phone: '010-5144-5093', birthday: '2??21?? },
    ]
  },
  {
    department: 'ì»¨ì„¤?…í?',
    color: '#95e1d3',
    members: [
      { name: '?´ì???(Rachel)', role: '?€??, email: 'rachel@realwork.group', phone: '010-8961-2294', birthday: '2??17?? },
      { name: '?¤ì???(Kate)', role: '?˜ì„ì»¨ì„¤?´íŠ¸', email: 'kate@realwork.group', phone: '010-3454-2474', birthday: '1??21?? },
      { name: '?¡ì?ê¸?(Kwazii)', role: '?˜ì„ì»¨ì„¤?´íŠ¸', email: 'kwazii@realwork.group', phone: '010-4732-5269', birthday: '10??11?? },
      { name: '?œí¬??(Hewon)', role: 'ì±…ì„ì»¨ì„¤?´íŠ¸', email: 'hewon@realwork.group', phone: '010-6677-5065', birthday: '9??27?? },
      { name: '?•ì„±??(Julie)', role: 'ì±…ì„ì»¨ì„¤?´íŠ¸', email: 'julie@realwork.group', phone: '010-2585-4449', birthday: '5??13?? },
      { name: '?„ì˜ˆ??(Eden)', role: 'ì»¨ì„¤?´íŠ¸', email: 'eden@realwork.group', phone: '010-2324-9495', birthday: '8??19?? },
      { name: '?¸ì???(Bella)', role: 'ì»¨ì„¤?´íŠ¸', email: 'bella@realwork.group', phone: '010-3011-8059', birthday: '7??27?? },
      { name: '?´ì„??(Boda)', role: '?¸í„´', email: 'boda@realwork.group', phone: '010-4912-9544', birthday: '5??15?? },
    ]
  },
  {
    department: 'ë¯¸ë””?´í?',
    color: '#ffa502',
    members: [
      { name: 'ìµœë™??(Danny)', role: '?€??, email: 'danny@realwork.group', phone: '010-2883-0630', birthday: '6??30?? },
      { name: '?¤ë‹¨ë¹?(Norah)', role: '?”ì?´ë„ˆ', email: 'Norah@realwork.group', phone: '010-5289-7644', birthday: '8??21?? },
      { name: 'ë°•ì„œ??(Lucy)', role: '? ì„ì»¨ì„¤?´íŠ¸', email: 'lucy@realwork.group', phone: '010-9423-8396', birthday: '12??30?? },
    ]
  },
];

export default function Team() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <Link href="/" style={{ color: 'var(--accent)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              ?ˆìœ¼ë¡??Œì•„ê°€ê¸?
            </Link>

            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '12px', marginTop: '0', color: 'var(--ink)' }}>
                ?‘¥ ?€ ?Œê°œ
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', margin: 0 }}>
                15ëª…ì˜ ë¦¬ì–¼?Œì»¤?¤ì„ ?Œê°œ?©ë‹ˆ?? ?¸í•˜ê²??°ë½ì£¼ì„¸??
              </p>
            </div>

            {teamData.map((dept, deptIndex) => (
              <div key={deptIndex} style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: 'var(--ink)', paddingBottom: '12px', borderBottom: `3px solid ${dept.color}` }}>
                  {dept.department}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                  {dept.members.map((member, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '20px',
                        background: 'var(--card)',
                        border: `1px solid var(--line)`,
                        borderLeft: `4px solid ${dept.color}`,
                        borderRadius: 'var(--radius)',
                        transition: 'all 0.3s ease',
                      }}
                      className="member-card"
                    >
                      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600, color: 'var(--ink)' }}>
                        {member.name}
                      </h3>
                      <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500, color: dept.color }}>
                        {member.role}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--faint)' }}>??/span>
                          <a href={`mailto:${member.email}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                            {member.email}
                          </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--faint)' }}>?“</span>
                          <a href={`tel:${member.phone}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                            {member.phone}
                          </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--faint)' }}>?‚</span>
                          <span>{member.birthday}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--ink)' }}>
                ?€ ë¬¸í™”
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '16px', lineHeight: '1.7' }}>
                ë¦¬ì–¼?Œí¬??? ì…?¤ì˜ ?±ì¥??ì¤‘ì‹œ?˜ëŠ” ?€?…ë‹ˆ?? ê°ì????•  ?ì—??ë°°ìš°ê³? ì§ˆë¬¸?˜ê³ , ?¨ê»˜ ?±ì¥?´ë‚˜ê°‘ë‹ˆ?? 
                ?¨ë³´??ê³¼ì •?ì„œ ë§Œë‚œ ?€?ë“¤?ê²Œ ?¸ì œ???¸í•˜ê²?ë¬¼ì–´ë³´ì„¸?? ?°ë¦¬??ëª¨ë‘ê°€ ?ˆë¡œ ë°°ìš´?¤ëŠ” ê²ƒì„ ???Œê³  ?ˆìŠµ?ˆë‹¤.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
