
const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

function Navigation() {
  return (
    <nav className="vertical-nav">
      {navItems.map((item, index) => (
        <a key={index} href={item.href} className="nav-item">
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
