
import { CheckCircle, Star, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Dịch Vụ Cài Win Online
                <span className="text-yellow-400"> Từ Xa</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Cài đặt Windows chuyên nghiệp, nhanh chóng ngay tại nhà. 
                Không cần mang máy đi đâu xa, tiết kiệm thời gian và chi phí!
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="font-semibold">Cài Win 7, 10, 11</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold">Dịch vụ từ xa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-300" />
                <span className="font-semibold">Nhanh chóng</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="font-semibold">Sử dụng vĩnh viễn</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4">
                Đặt lịch cài đặt ngay
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-4">
                Tư vấn miễn phí
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-blue-200">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-blue-200">Hỗ trợ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">30p</div>
                <div className="text-sm text-blue-200">Hoàn thành</div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Highlights */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Tại sao chọn chúng tôi?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white bg-opacity-10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Cài đặt Win 7, 10, 11</h4>
                  <p className="text-blue-100 text-sm">Tất cả phiên bản theo yêu cầu khách hàng</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white bg-opacity-10 rounded-lg">
                <Star className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Dịch vụ từ xa nhanh</h4>
                  <p className="text-blue-100 text-sm">Kết nối từ xa an toàn, bảo mật</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white bg-opacity-10 rounded-lg">
                <Shield className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Cài đặt Phần mềm + Windows</h4>
                  <p className="text-blue-100 text-sm">Gói combo tiết kiệm, đầy đủ tính năng</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white bg-opacity-10 rounded-lg">
                <Clock className="w-6 h-6 text-blue-300 mt-1" />
                <div>
                  <h4 className="font-semibold">Sử dụng vĩnh viễn</h4>
                  <p className="text-blue-100 text-sm">Bản quyền chính hãng, không giới hạn thời gian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
