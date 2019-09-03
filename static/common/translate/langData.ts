/*
 * @Description: TODO 各语言的数据
 * @Author: zb
 * @Date: 2019-08-31 18:57:40
 * @LastEditors: zb
 * @LastEditTime: 2019-09-01 23:56:48
 */
import { platformInstance, Language } from '@/common'

const zh_language = {
   key_0: '首页',
   key_1: '公司简介',
   key_2: '成功案例展示',
   key_3: '公司风采',
   key_4: '联系我们',
   key_5: '精益求精，诚信服务',
   key_6: '山东柯诺信息科技有限公司成立于2018年，目前有员工30余人。',
   key_7: '公司核心人员来自于海外学习及工作过的精英，在国内大型互联网公司就职过的技术及运营骨干。山东柯诺信息科技有限公司坚持“以应用软件开发和服务为核心，国内、国外市场同步发展”的战略。通过不同市场的借鉴和互动，不断吸收国际化管理经验和先进技术经验，促进技术和业务的相互转化，实现公司产品和技术的不断创新。',
   key_8: '目前，公司业务覆盖海外的政府及公共事业、金融、等各行业领域以及国内的电子商务、金融、智慧社区、CRM等领域。',
   key_9: '团队介绍',
   key_10: '高瞻远瞩，制胜未来',
   key_11: '互联网经验',
   key_12: ''
};

const en_language = {
   key_1: 'Company Introduce',
   key_2: 'Demonstration of Success Cases',
   key_3: 'Company elegance',
   key_4: 'Contact us'
}

export const getLangData = function (lang: Language): object {
   if (lang === Language.CHINESE) {
      return zh_language
   } else if (lang === Language.ENGLISH) {
      return en_language;
   }
}
