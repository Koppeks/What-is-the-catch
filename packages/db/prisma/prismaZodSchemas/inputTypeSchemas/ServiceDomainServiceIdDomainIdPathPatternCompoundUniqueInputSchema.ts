import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema: z.ZodType<Prisma.ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInput> = z.strictObject({
  serviceId: z.string(),
  domainId: z.string(),
  pathPattern: z.string(),
});

export default ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema;
