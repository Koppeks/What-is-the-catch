import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateNestedOneWithoutServiceDomainInputSchema } from './DomainCreateNestedOneWithoutServiceDomainInputSchema';

export const ServiceDomainCreateWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainCreateWithoutServiceInput> = z.strictObject({
  id: z.cuid().optional(),
  pathPattern: z.string().optional().nullable(),
  domain: z.lazy(() => DomainCreateNestedOneWithoutServiceDomainInputSchema),
});

export default ServiceDomainCreateWithoutServiceInputSchema;
