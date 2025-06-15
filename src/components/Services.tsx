
import { CheckCircle, Monitor, Download, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Cài đặt Windows",
      description: "Cài đặt Windows 7, 10, 11 với driver đầy đủ",
      features: [
        "Tất cả phiên bản Windows",
        "Driver tự động",
        "Kích hoạt bản quyền",
        "Tối ưu hệ thống"
      ]
    },
    {
      icon: Download,
      title: "Cài phần mềm",
      description: "Cài đặt các phần mềm cơ bản và chuyên dụng",
      features: [
        "Office 2016, 2019, 2021",
        "Phần mềm diệt virus",
        "Trình duyệt web",
        "Phần mềm theo yêu cầu"
      ]
    },
    {
      icon: Wrench,
      title: "Bảo trì hệ thống",
      description: "Tối ưu và bảo trì máy tính định kỳ",
      features: [
        "Dọn dẹp hệ thống",
        "Kiểm tra lỗi",
        "Cập nhật bảo mật",
        "Tối ưu tốc độ"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cung cấp đa dạng dịch vụ IT từ xa, đáp ứng mọi nhu cầu của khách hàng 
            từ cá nhân đến doanh nghiệp
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 border-2 border-transparent hover:border-blue-200"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Quy trình làm việc
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Liên hệ</h4>
              <p className="text-gray-600 text-sm">Gọi điện hoặc nhắn tin để đặt lịch</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Kết nối</h4>
              <p className="text-gray-600 text-sm">Cài đặt phần mềm kết nối từ xa</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Thực hiện</h4>
              <p className="text-gray-600 text-sm">Kỹ thuật viên thực hiện cài đặt</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Hoàn thành</h4>
              <p className="text-gray-600 text-sm">Kiểm tra và bàn giao khách hàng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
