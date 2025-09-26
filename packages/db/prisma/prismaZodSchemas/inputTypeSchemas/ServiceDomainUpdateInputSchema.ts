import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ServiceUpdateOneRequiredWithoutServiceDomainNestedInputSchema } from './ServiceUpdateOneRequiredWithoutServiceDomainNestedInputSchema';
import { DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema } from './DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema';

export const ServiceDomainUpdateInputSchema: z.ZodType<Prisma.ServiceDomainUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pathPattern: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutServiceDomainNestedInputSchema).optional(),
  domain: z.lazy(() => DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateInput>;

export default ServiceDomainUpdateInputSchema;
