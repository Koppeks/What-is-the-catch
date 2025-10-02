import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainCreateWithoutCompanyInputSchema } from './DomainCreateWithoutCompanyInputSchema';
import { DomainUncheckedCreateWithoutCompanyInputSchema } from './DomainUncheckedCreateWithoutCompanyInputSchema';

export const DomainCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.DomainCreateOrConnectWithoutCompanyInput> = z.strictObject({
  where: z.lazy(() => DomainWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DomainCreateWithoutCompanyInputSchema), z.lazy(() => DomainUncheckedCreateWithoutCompanyInputSchema) ]),
});

export default DomainCreateOrConnectWithoutCompanyInputSchema;
