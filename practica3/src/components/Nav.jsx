import React from "react"

export const Nav = ({children}) => {
  return (
      <nav className="nav-bar">
          {children}
      </nav>
  )
}

export function Logo() {
  return (
      <div className="logo">
          <span role="img"> @</span>
          <hl>Palomitas de papel</hl>
      </div>
  )
}

export function Search({ query, setQuery }) {
  return (
      <input
          className="search"
          type="text"
          placeholder="Buscar peliculas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
      />
  )
}

export function NumResults([movies]) {
  return (
      <p className="num-results">
          <strong>{movies.length}</strong> resultados encontrados
      </p>
  )
}