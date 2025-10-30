import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './router/Navigation';
import Search_Item from './components/Search_Product/Search_Item';
import Login from './components/login/Login';

export default function App() {
  const [search, setSearch] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [modal, setModal] = useState(null);

  return (
    <div>
      {search && <Search_Item setsearch={setSearch} />}


      <Login showPreview={showPreview} setShowPreview={setShowPreview} modal={modal} setModal={setModal} />
      <Header setSearch={setSearch} setShowPreview={setShowPreview} />

      <Navigation setsearch={setSearch} />
    </div>
  );
}