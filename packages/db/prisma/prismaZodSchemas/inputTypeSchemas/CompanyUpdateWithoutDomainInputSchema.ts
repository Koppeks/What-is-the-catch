import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ServiceUpdateManyWithoutCompanyNestedInputSchema } from './ServiceUpdateManyWithoutCompanyNestedInputSchema';
import { CompanyAliasUpdateManyWithoutCompanyNestedInputSchema } from './CompanyAliasUpdateManyWithoutCompanyNestedInputSchema';

export const CompanyUpdateWithoutDomainInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutDomainInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  websiteUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  countryCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Service: z.lazy(() => ServiceUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyAlias: z.lazy(() => CompanyAliasUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyUpdateWithoutDomainInput>;

export default CompanyUpdateWithoutDomainInputSchema;
