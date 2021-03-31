import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';

interface IUserData {
  email: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

interface IProductsData {
  id: string;
  name: string;
  price: number
  quantity: number
  created_at: Date;
  updated_at: Date;
}

const Dashboard: React.FC = () => {
  const [ user, setUser ] = useState<IUserData>({} as IUserData);
  const [ products, setProducts ] = useState<IProductsData>({} as IProductsData);

  const token = localStorage.getItem('@ProductsManagement:token');

  useEffect(() => {
    api.get('/products')
      .then(response => {
        setProducts(response.data.products);
      }
    );

    api.get('/users', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setUser(response.data.user);
    }
  );
  }, [token]);

  return (
    <Container>
      <h1>{user.name}</h1>
    </Container>
  )
}

export default Dashboard;