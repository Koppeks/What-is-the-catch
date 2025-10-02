import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainUpdateWithoutCompanyInputSchema } from './DomainUpdateWithoutCompanyInputSchema';
import { DomainUncheckedUpdateWithoutCompanyInputSchema } from './DomainUncheckedUpdateWithoutCompanyInputSchema';
import { DomainCreateWithoutCompanyInputSchema } from './DomainCreateWithoutCompanyInputSchema';
import { DomainUncheckedCreateWithoutCompanyInputSchema } from './DomainUncheckedCreateWithoutCompanyInputSchema';

export const DomainUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUpsertWithWhereUniqueWithoutCompanyInput> = z.strictObject({
  where: z.lazy(() => DomainWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DomainUpdateWithoutCompanyInputSchema), z.lazy(() => DomainUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => DomainCreateWithoutCompanyInputSchema), z.lazy(() => DomainUncheckedCreateWithoutCompanyInputSchema) ]),
});

export default DomainUpsertWithWhereUniqueWithoutCompanyInputSchema;
