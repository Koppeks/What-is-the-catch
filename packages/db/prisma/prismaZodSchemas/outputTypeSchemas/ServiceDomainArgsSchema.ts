import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainSelectSchema } from '../inputTypeSchemas/ServiceDomainSelectSchema';
import { ServiceDomainIncludeSchema } from '../inputTypeSchemas/ServiceDomainIncludeSchema';

export const ServiceDomainArgsSchema: z.ZodType<Prisma.ServiceDomainDefaultArgs> = z.object({
  select: z.lazy(() => ServiceDomainSelectSchema).optional(),
  include: z.lazy(() => ServiceDomainIncludeSchema).optional(),
}).strict();

export default ServiceDomainArgsSchema;
