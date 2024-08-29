


const configs = {
  'invitationEnable': true,
  'redeemEnable': true,
  'limitDashboard': true,
  //   'limitApp': false,
  //   'limitExport': false,
  //   'limitImport': false,
  //   'limitNotionImport': false,
};

export function getConfigs(local: string){
  const isZh = local.includes('zh_CN');
  return {
    ...configs,
    'tutorialUrl': isZh ? 'https://noah-1252694266.cos.ap-shanghai.myqcloud.com/ark/other/tutorial_cn.mp4' : 'https://noah-1252694266.cos.ap-shanghai.myqcloud.com/ark/other/tutorial_cn.mp4',
    'manualUrl': 'https://docs.qq.com/doc/DY295cmdzYnhvY3dM',
    'privacyUrl': 'https://docs.qq.com/doc/DY25LWE9LQ0FKa0tC',
  }
}