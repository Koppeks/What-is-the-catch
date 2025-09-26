import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema: z.ZodType<Prisma.ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInput> = z.object({
  serviceId: z.string(),
  domainId: z.string(),
  pathPattern: z.string()
}).strict() as z.ZodType<Prisma.ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInput>;

export default ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema;
