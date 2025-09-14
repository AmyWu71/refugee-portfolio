import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid gap-8 sm:grid-cols-[200px_1fr] items-start">
      <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-xl overflow-hidden border">
        <Image src="/me.svg" alt="Author photo" fill className="object-cover" />
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">关于我</h1>
        <p className="text-sm text-gray-300">深圳中学国际部，高二学生。兴趣方向为国际关系、经济与人道主义问题。</p>
        <p className="text-sm text-gray-300">曾在 MUN 担任学生领导者，参与研究项目与写作竞赛。我希望以青年视角关注缅甸难民及相关国际议题。</p>
        <p className="text-sm text-gray-300">《The Alchemist》启发我在不确定中保持希望：每一个名字，都值得一次机会。</p>
      </div>
    </div>
  );
}


