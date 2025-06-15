
import { Check, Star, Crown } from 'lucide-react';
import { Button } from './ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Gói Cơ Bản",
      price: "200.000",
      period: "VNĐ",
      description: "Dành cho nhu cầu cài đặt đơn giản",
      features: [
        "Cài đặt Windows 7/10/11",
        "Driver cơ bản",
        "Kích hoạt bản quyền",
        "Hỗ trợ 7 ngày",
        "Tối ưu cơ bản"
      ],
      popular: false,
      icon: Check
    },
    {
      name: "Gói Phổ Biến",
      price: "350.000",
      period: "VNĐ",
      description: "Lựa chọn tốt nhất cho hầu hết khách hàng",
      features: [
        "Cài đặt Windows + Office",
        "Driver đầy đủ",
        "Kích hoạt bản quyền",
        "Phần mềm cơ bản",
        "Antivirus miễn phí",
        "Hỗ trợ 30 ngày",
        "Tối ưu nâng cao"
      ],
      popular: true,
      icon: Star
    },
    {
      name: "Gói Cao Cấp",
      price: "500.000",
      period: "VNĐ",
      description: "Giải pháp toàn diện cho doanh nghiệp",
      features: [
        "Cài đặt Windows + Office Pro",
        "Driver chuyên nghiệp",
        "Kích hoạt bản quyền",
        "Phần mềm theo yêu cầu",
        "Antivirus cao cấp",
        "Backup & Recovery",
        "Hỗ trợ 90 ngày",
        "Bảo trì định kỳ"
      ],
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Bảng giá dịch vụ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn. 
            Tất cả gói đều có chất lượng đảm bảo và hỗ trợ chuyên nghiệp
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                plan.popular ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    PHỔ BIẾN NHẤT
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-blue-500' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-4 text-lg font-bold ${
                    plan.popular 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  Chọn gói này
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Cam kết chất lượng
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-blue-600 font-bold text-lg">✓ Bảo hành dịch vụ</div>
                <p className="text-gray-600 text-sm">Hoàn tiền 100% nếu không hài lòng</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-lg">✓ Hỗ trợ 24/7</div>
                <p className="text-gray-600 text-sm">Tư vấn kỹ thuật mọi lúc mọi nơi</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-lg">✓ Thanh toán sau</div>
                <p className="text-gray-600 text-sm">Thanh toán khi hoàn thành công việc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
