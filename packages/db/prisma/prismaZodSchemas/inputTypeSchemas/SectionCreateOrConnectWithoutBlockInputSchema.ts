import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionCreateWithoutBlockInputSchema } from './SectionCreateWithoutBlockInputSchema';
import { SectionUncheckedCreateWithoutBlockInputSchema } from './SectionUncheckedCreateWithoutBlockInputSchema';

export const SectionCreateOrConnectWithoutBlockInputSchema: z.ZodType<Prisma.SectionCreateOrConnectWithoutBlockInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SectionCreateWithoutBlockInputSchema), z.lazy(() => SectionUncheckedCreateWithoutBlockInputSchema) ]),
});

export default SectionCreateOrConnectWithoutBlockInputSchema;
