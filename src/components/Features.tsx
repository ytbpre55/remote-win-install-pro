
import { Monitor, Wifi, Shield, Clock, Users, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Cài đặt từ xa",
      description: "Kết nối an toàn qua internet, không cần mang máy đến trung tâm"
    },
    {
      icon: Clock,
      title: "Nhanh chóng",
      description: "Hoàn thành trong 30-60 phút, tiết kiệm thời gian quý báu"
    },
    {
      icon: Shield,
      title: "An toàn bảo mật",
      description: "Quy trình bảo mật cao, không lưu trữ dữ liệu cá nhân"
    },
    {
      icon: Wifi,
      title: "Hỗ trợ online",
      description: "Tư vấn và hỗ trợ kỹ thuật 24/7 qua các kênh online"
    },
    {
      icon: Users,
      title: "Đội ngũ chuyên nghiệp",
      description: "Kỹ thuật viên giàu kinh nghiệm, được đào tạo bài bản"
    },
    {
      icon: Headphones,
      title: "Hậu mãi tận tâm",
      description: "Bảo hành dịch vụ, hỗ trợ sau cài đặt miễn phí"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tại sao chọn dịch vụ của chúng tôi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MinhTuTech mang đến giải pháp cài đặt Windows từ xa tiện lợi, 
            chuyên nghiệp và tiết kiệm thời gian cho khách hàng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
