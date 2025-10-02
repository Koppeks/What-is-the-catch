import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CompanyUpdateOneRequiredWithoutDomainNestedInputSchema } from './CompanyUpdateOneRequiredWithoutDomainNestedInputSchema';
import { ServiceDomainUpdateManyWithoutDomainNestedInputSchema } from './ServiceDomainUpdateManyWithoutDomainNestedInputSchema';

export const DomainUpdateInputSchema: z.ZodType<Prisma.DomainUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  host: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutDomainNestedInputSchema).optional(),
  ServiceDomain: z.lazy(() => ServiceDomainUpdateManyWithoutDomainNestedInputSchema).optional(),
});

export default DomainUpdateInputSchema;
