
import { Monitor, Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">MinhTuTech</h3>
                <p className="text-gray-400">Cài Win Online</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Chuyên cung cấp dịch vụ cài đặt Windows từ xa chuyên nghiệp, 
              nhanh chóng và uy tín. Tiết kiệm thời gian, đảm bảo chất lượng.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-lg hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Dịch vụ</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cài Windows 7</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cài Windows 10</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cài Windows 11</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cài Office</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cài phần mềm</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bảo trì hệ thống</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Hỗ trợ</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Liên hệ hỗ trợ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">0987.654.321</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">contact@minhtutech.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>123 Nguyễn Văn A, Quận 1</p>
                  <p>TP. Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-900 rounded-lg">
              <h5 className="font-bold text-blue-300 mb-2">Hotline 24/7</h5>
              <p className="text-2xl font-bold text-white">0987.654.321</p>
              <p className="text-blue-200 text-sm">Hỗ trợ khẩn cấp mọi lúc</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 MinhTuTech. Tất cả quyền được bảo lưu.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
