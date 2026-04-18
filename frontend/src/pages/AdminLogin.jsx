import React, { useState } from 'react';
import api from '../services/api';
import { setToken, getToken, clearToken } from '../utils/auth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const token = getToken();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/auth/admin/login', form);
      setToken(res.data.token);
      toast.success('Login successful!');
      nav('/admin/dashboard');
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const switchAccount = () => { clearToken(); };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-6'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4 shadow-lg'>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>Admin Login</h2>
          <p className='text-gray-600'>Access admin panel and management tools</p>
        </div>

        {token && (
          <Card className='mb-6 border-yellow-200 bg-yellow-50'>
            <div className='flex items-start gap-3'>
              <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className='text-sm text-yellow-800'>
                <p className='font-medium mb-1'>Already logged in</p>
                <p>
                  Continue to your{' '}
                  <Link to='/admin/dashboard' className='underline font-medium'>
                    dashboard
                  </Link>
                  {' '}or{' '}
                  <button onClick={switchAccount} className='underline font-medium'>
                    switch account
                  </button>
                </p>
              </div>
            </div>
          </Card>
        )}

        <Card>
          <form onSubmit={submit} className='space-y-5'>
            <Input
              label="Email Address"
              type="email"
              placeholder='Enter admin email'
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type='password'
              placeholder='Enter your password'
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
            />
            <Button className='w-full' size='lg' loading={loading}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login to Admin Panel
            </Button>
          </form>
        </Card>

        <div className='mt-6 text-center'>
          <p className='text-gray-600 text-sm'>
            For admin credentials, contact system administrator
          </p>
        </div>
      </div>
    </div>
  );
}
