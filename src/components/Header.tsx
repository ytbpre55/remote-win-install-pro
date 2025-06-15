
import { useState } from 'react';
import { Menu, X, Monitor, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">MinhTuTech</h1>
              <p className="text-sm text-gray-600">Cài Win Online</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Trang chủ</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Dịch vụ</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Bảng giá</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Liên hệ</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">0987.654.321</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Đặt lịch ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Trang chủ</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Dịch vụ</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Bảng giá</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Liên hệ</a>
              <div className="flex items-center text-blue-600 pt-2">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">0987.654.321</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Đặt lịch ngay
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
