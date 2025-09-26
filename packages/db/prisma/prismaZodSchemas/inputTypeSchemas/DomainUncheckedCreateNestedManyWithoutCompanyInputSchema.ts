import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateWithoutCompanyInputSchema } from './DomainCreateWithoutCompanyInputSchema';
import { DomainUncheckedCreateWithoutCompanyInputSchema } from './DomainUncheckedCreateWithoutCompanyInputSchema';
import { DomainCreateOrConnectWithoutCompanyInputSchema } from './DomainCreateOrConnectWithoutCompanyInputSchema';
import { DomainCreateManyCompanyInputEnvelopeSchema } from './DomainCreateManyCompanyInputEnvelopeSchema';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';

export const DomainUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => DomainCreateWithoutCompanyInputSchema),z.lazy(() => DomainCreateWithoutCompanyInputSchema).array(),z.lazy(() => DomainUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => DomainUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DomainCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => DomainCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DomainCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DomainWhereUniqueInputSchema),z.lazy(() => DomainWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.DomainUncheckedCreateNestedManyWithoutCompanyInput>;

export default DomainUncheckedCreateNestedManyWithoutCompanyInputSchema;
