import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema } from './DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema';

export const ServiceDomainUpdateWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainUpdateWithoutServiceInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pathPattern: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  domain: z.lazy(() => DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateWithoutServiceInput>;

export default ServiceDomainUpdateWithoutServiceInputSchema;
