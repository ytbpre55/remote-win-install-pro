
import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Đã gửi thông tin thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ ngay để được tư vấn 
            và báo giá chi tiết cho dịch vụ cài đặt Windows từ xa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Thông tin liên hệ
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Điện thoại</h4>
                    <p className="text-blue-600 font-semibold">0987.654.321</p>
                    <p className="text-gray-600 text-sm">Hotline hỗ trợ 24/7</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-blue-600 font-semibold">contact@minhtutech.com</p>
                    <p className="text-gray-600 text-sm">Phản hồi trong 30 phút</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Zalo/Telegram</h4>
                    <p className="text-blue-600 font-semibold">0987.654.321</p>
                    <p className="text-gray-600 text-sm">Chat trực tiếp với kỹ thuật viên</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Địa chỉ</h4>
                    <p className="text-gray-700">123 Nguyễn Văn A, Quận 1</p>
                    <p className="text-gray-600 text-sm">TP. Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Giờ làm việc</h4>
                    <p className="text-gray-700">24/7 - Cả tuần</p>
                    <p className="text-gray-600 text-sm">Dịch vụ cấp tốc ngoài giờ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800">Liên hệ nhanh</h4>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi ngay
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Zalo
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Đặt lịch cài đặt
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Họ tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0987 654 321"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Dịch vụ cần hỗ trợ *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="windows-7">Cài Windows 7</option>
                  <option value="windows-10">Cài Windows 10</option>
                  <option value="windows-11">Cài Windows 11</option>
                  <option value="office">Cài Office</option>
                  <option value="combo">Combo Windows + Office</option>
                  <option value="other">Dịch vụ khác</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mô tả yêu cầu
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Mô tả chi tiết yêu cầu của bạn..."
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-bold">
                <Send className="w-5 h-5 mr-2" />
                Gửi yêu cầu
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
