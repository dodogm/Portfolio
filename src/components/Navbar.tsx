import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [['Início', '#inicio'], ['Sobre', '#sobre'], ['Projetos', '#projetos'], /*['Experiência', '#experiencia']*/ ['Contato', '#contato']];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return <header className="nav-wrap">
    <nav
      className="nav container" aria-label="Navegação principal">

      <button className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}>{open ? <X /> : <Menu />}

      </button>
      <ul className={open ? 'nav-links is-open' : 'nav-links'}>{links.map(([label, href]) =>
        <li key={href}>
          <a href={href} onClick={() => setOpen(false)}>{label}</a>
        </li>)}
      </ul>
    </nav>
  </header>;
}
